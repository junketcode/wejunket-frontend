import React, { useEffect, useState } from "react"
import Head from "next/head"
// Components
import NavBar from "../components/v2/NavBar/NavBar"
// import Footer from "../components/2020/Footer/Footer"
import Footer from "../components/Footer/Footer"
import AppStoreGroup from '../components/v2/AppStoreGroup/AppStoreGroup'
import JunketsFullMap from '../components/TourListing/JunketsMap/JunketsFullMap'
import TourListing from "../components/TourListing/TourListing/TourListing.component"
import UserToolBar from "../components/TourListing/UserToolBar/UserToolBar.component"
import JunketsMap from "../components/TourListing/JunketsMap/JunketsMap"
import TourListingToolBar from "../components/TourListing/TourListingToolBar/TourListingFilters.component"
import { ToursService } from "../services/tours.service"
import { AsyncFetchUtil } from "../utils/async-fetch.util"
import PageNav from "../components/TourListing/TourListing/components/PageNav/PageNav"
import { ITourListResponse } from "../interfaces/tour-data.interface"
import LoadingOverlay from "../components/LoadingOverlay/LoadingOverlay"
import { SessionStorageService } from "../services/sessionStorage.service"
import Router, { useRouter } from "next/router"
import { AuthService, ILoginCredentials } from "../services/auth.service"
import environment from "../environment/environment"

const TourListPage = () => {
  const { query: { search } } = useRouter()
  const [tourList, setTourList] = useState<ITourListResponse | undefined>(
    undefined
  )
  const [pageURL, setPageURL] = useState<string | undefined>(undefined)
  const [toursLoading, setToursLoading] = useState<boolean>(true)
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
    setToursLoading(true)
    AsyncFetchUtil.asyncDataFetching(
      ToursService.getTourList,
      setTourList,
      setToursLoading,
      { searchKey: search, pageURL }
    )
  }, [search])

  useEffect(() => {
    if (
      tourList &&
      pageURL &&
      !pageURL.includes(`?page=${tourList.meta.current_page}`)
    ) {
      AsyncFetchUtil.asyncDataFetching(
        ToursService.getTourList,
        setTourList,
        setToursLoading,
        { searchKey: search, pageURL }
      )
    }
  }, [pageURL])

  const handleTourPageChange = pageURL => {
    setPageURL(pageURL)
  }

  if (toursLoading) {
    return <LoadingOverlay />
  }

  const pageNav = tourList && !toursLoading && (
    <PageNav
      handleTourPageChange={handleTourPageChange}
      links={tourList.links}
      meta={tourList.meta}
    />
  )


  return (
    <div id="page-wrapper" className="static w-full min-h-screen">
      <Head>
        <title>Junkets | Junket</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar black />
      <div
        id="content-wrapper"
        className="flex flex-col mt-20 min-h-screen"
      >
        <div className="p-3 pb-5 mt-0 pt-0">
          <JunketsFullMap />
          <AppStoreGroup />
        </div>
        {/* {tourList && !toursLoading && tourList.data.length > 0 && (
          <TourListingToolBar
            startJunketLink={tourList.data[0].id}
            toursAvailable={tourList.meta.total}
          />
        )} */}
        {pageNav}
        {tourList && !toursLoading && tourList.data.length > 0 && <TourListing tours={tourList.data} />}
        {tourList && !toursLoading && tourList.data.length <= 0 && (
          <span>There is no free junkets.</span>
        )}
        {pageNav}
        <Footer />
      </div>
    </div>
  )
}

export default TourListPage
