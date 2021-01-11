import React, { useEffect, useState } from "react"
import Router, { useRouter } from "next/router"
// Base Styles for Tailwind
import "../../styles/index.scss"
import { ToursService } from "../../services/tours.service"
import { IStop, ITourDataResponse } from "../../interfaces/tour-data.interface"
import { AsyncFetchUtil } from "../../utils/async-fetch.util"
// Components
import MainTourPage from "../../components/TourPage/MainTourPage"
import StopTourPage from "../../components/TourPage/StopTourPage"
import TemplateLayout from "../../components/TourPage/TemplateLayout"
import {Coords} from "google-map-react";
import LoadingOverlay from "../../components/LoadingOverlay/LoadingOverlay";
import Footer from "../../components/Footer/Footer";
import {AuthService, ILoginCredentials} from "../../services/auth.service";
import {SessionStorageService} from "../../services/sessionStorage.service";
import environment from "../../environment/environment";

const TourListPage = ({
  error,
}: {
  error: any
  tourData: ITourDataResponse
}) => {
  const router = useRouter()
  const { tourId } = router.query
  const [tourData, setTourData] = useState<ITourDataResponse | undefined>()
  const [toursLoading, setToursLoading] = useState(true)
  const [activeStop, setActiveStop] = useState<IStop | undefined>()
  const [isLoggedIn, setIsLoggedIn] = React.useState(false)
  const handleLoginData = async (data: ILoginCredentials) => {
    if (!SessionStorageService || !isLoggedIn) {
      try {
        const userData = await AuthService.login(data)
        SessionStorageService.set("user", JSON.stringify(userData.data))
        setIsLoggedIn(true)
      } catch (err) {
        console.error(err)
      }
    }
  }

  useEffect(() => {
    const data = environment.API_CREDENTIALS
    handleLoginData(data)
        .then(res => {})
        .catch(e => {
          console.log(e)
        })
  }, [isLoggedIn])


  useEffect(() => {
    if (!tourData && tourId) {
      AsyncFetchUtil.asyncDataFetching(
        ToursService.getTourData,
        setTourData,
        setToursLoading,
        tourId
      )
    } else {
      setToursLoading(false)
    }
  })

  if (error && error === "req-failed") {
    return <h1>There was an Issue loading the Tour Data, try Refreshing...</h1>
  }

  if (toursLoading) {
    return <LoadingOverlay/>
  }

  if (!tourData) {
    return <LoadingOverlay/>
  }

  const { tour, stops } = tourData

  const backToListing = () => {
    Router.push("/junkets")
  }

  const handleClickOnStop = (id) => () => {
    const stop = stops.find((s) => s.id === id);
    if (stop) {
      setActiveStop(stop)
    } else {
      setActiveStop(undefined)
    }
  }

  const handleClickNextPrev = (indexChange: number /*ie: -1, +1*/) => () => {
    const stopIndex = stops.findIndex(s => s.id === activeStop.id)
    const nextOrPrevIndex = stopIndex + indexChange
    const nextOrPrevStop = stops[nextOrPrevIndex]
    if (nextOrPrevStop) {
      setActiveStop(nextOrPrevStop)
    } else {
      setActiveStop(undefined)
    }
  }

  const { title, main_image, description } = tour

  if (activeStop) {
    return (
      <TemplateLayout title={title}>
        <StopTourPage
          activeStop={activeStop}
          tour={tour}
          stops={stops}
          handleClickOnStop={handleClickOnStop}
          handleClickNextPrev={handleClickNextPrev}
        />
      </TemplateLayout>
    )
  }

  return (
    <TemplateLayout title={title}>
      <MainTourPage
        tour={tour}
        tourData={tourData}
        main_image={main_image}
        description={description}
        stops={stops}
        backToListing={backToListing}
        handleClickOnStop={handleClickOnStop}
      />
    </TemplateLayout>
  )
}

export default TourListPage
