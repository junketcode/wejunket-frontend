import React, { useEffect, useState } from "react"
import Router, { withRouter, useRouter } from "next/router"
// import { connect } from 'react-redux' 
// import { bindActionCreators } from 'redux'
// import { getTour } from '../../../../../store/tour/action'
// Base Styles for Tailwind
import "../../../../../styles/index.scss"
import "../../../../../styles/tour.scss"
import { ToursService } from "../../../../../services/tours.service"
import { IStop, ITourDataResponse } from "../../../../../interfaces/tour-data.interface"
import { AsyncFetchUtil } from "../../../../../utils/async-fetch.util"
import { SessionStorageService } from "../../../../../services/sessionStorage.service"
// Components
import NavBar from "../../../../../components/NavBar/NavBar"
import Footer from "../../../../../components/2020/Footer/Footer"
import JunketStopTourPage from "../../../../../components/JunketTourPage/JunketStopTourPage"
import LoadingOverlay from "../../../../../components/LoadingOverlay/LoadingOverlay";
import LimitedUserPopUp from "../../../../../components/JunketTourPage/Paywall/Paywall"

const SharableTourPage = ({
  error,
  // getTour,
  // tourData
}: {
  error: any
  // getTour: any,
  tourData: ITourDataResponse
}) => {
  const router = useRouter()
  const { city, junketName, junketId, junketStopId } = router.query
  const [tourData, setTourData] = useState<ITourDataResponse | undefined>()
  const [toursLoading, setToursLoading] = useState(true)
  const [activeStop, setActiveStop] = useState<IStop | undefined>()
  const [limited, setLimited] = useState(false)

  const closeModalHandler = () => {
    setLimited(false)
  }

  useEffect(() => {
   
    if (!tourData && junketId) {
      AsyncFetchUtil.asyncDataFetching(
        ToursService.getSharableTourData,
        setTourData,
        setToursLoading,
        junketId
      )
    } else {
      setToursLoading(false)
    }

    if(st){
      setActiveStop(st)
    }else{
      setActiveStop(undefined)
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

  const tourCity = tourData.tour.location.city.replace(/ /g, "_").toLowerCase()
  const tourName = tourData.tour.title.replace(/-/g, "").replace(/  /g, "").replace(/ /g, "_").toLowerCase()

  console.log(tourName, junketName)
  if((tourCity != city) || ( tourName != junketName) ){
    return (
      <div> The url format is not correct. </div>
    )
  }

  const { tour, stops } = tourData
  
  // Check paied junket.
  let limitedStops = []
  if(tour.pricing_type == "free"){
    limitedStops = stops;
  }else{
    limitedStops = stops.slice(0, 3);
  }
   
  
  // if(!SessionStorageService.get("user")){
  //   limitedStops = stops;
  // }

  const st = stops.find((s) => s.id.toString() === junketStopId);
 
  const handleClickOnStop = (id) => () => {
    const stop = stops.find((s) => s.id === id);

    if (stop) {
      router.push("/junkets/"+tourCity+"/"+tourName+"/"+junketId+"/"+id)
    } else {
      router.push("/junkets/"+tourCity+"/"+tourName+"/"+junketId)
    }
  }

  const handleClickNextPrev = (indexChange: number /*ie: -1, +1*/) => () => {
    const stopIndex = limitedStops.findIndex(s => s.id === activeStop.id)
    const nextOrPrevIndex = stopIndex + indexChange
    const nextOrPrevStop = limitedStops[nextOrPrevIndex]

    if (nextOrPrevStop) {
      router.push("/junkets/"+tourCity+"/"+tourName+"/"+junketId+"/"+nextOrPrevStop.id)
    } else {
      if((tour.pricing_type == "premium") && (stops[nextOrPrevIndex])){
        setLimited(true);
      }
      // router.push("/junkets/"+tourCity+"/"+tourName+"/"+junketId)
    }
  }

  // return (
  //   <React.Fragment>
  //     <NavBar black />
  //       <div className="tour-container">
  //       <LimitedUserPopUp closeModalHandler={closeModalHandler} modalOpen={limited}/>
  //         { activeStop&&
  //           <JunketStopTourPage
  //             activeStop={activeStop}
  //             tour={tour}
  //             stops={limitedStops}
  //             handleClickOnStop={handleClickOnStop}
  //             handleClickNextPrev={handleClickNextPrev}
  //           />
  //         }

  //       </div>
  //     <Footer />
  //   </React.Fragment>
  // )
}


// const mapStateToProps = (state) => ({
//   tourData: state.tour,
// })

// const mapDispatchToProps = (dispatch) => {
//   return {
//     getTour: bindActionCreators(getTour, dispatch),
//   }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(SharableTourPage)
export default SharableTourPage
