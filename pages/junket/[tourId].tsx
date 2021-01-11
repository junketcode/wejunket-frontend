import React, { useEffect, useState } from "react"
import { useRouter } from "next/router"
// Base Styles for Tailwind
import "../../styles/index.scss"
import { ToursService } from "../../services/tours.service"
import { IStop, ITourDataResponse } from "../../interfaces/tour-data.interface"
import { AsyncFetchUtil } from "../../utils/async-fetch.util"
// Components
import SharableMainTourPage from "../../components/SharableTourPage/SharableMainTourPage"
import SharableStopTourPage from "../../components/SharableTourPage/SharableStopTourPage"
import LoadingOverlay from "../../components/LoadingOverlay/LoadingOverlay";

const SharableTourPage = ({
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


  useEffect(() => {
    if (!tourData && tourId) {
      AsyncFetchUtil.asyncDataFetching(
        ToursService.getSharableTourData,
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

  const { main_image, description } = tour

  if (activeStop) {
    return (
        <SharableStopTourPage
          activeStop={activeStop}
          tour={tour}
          stops={stops}
          handleClickOnStop={handleClickOnStop}
          handleClickNextPrev={handleClickNextPrev}
        />
    )
  }

  return (
      <SharableMainTourPage
        tour={tour}
        tourData={tourData}
        main_image={main_image}
        description={description}
        stops={stops}
        handleClickOnStop={handleClickOnStop}
      />
  )
}

export default SharableTourPage
