import React, { useEffect, useState } from "react"
import Router, { withRouter, useRouter } from "next/router"
// import { connect } from 'react-redux'
// import { bindActionCreators } from 'redux'
// import { getTour } from '../../../../store/tour/action'
// import { wrapper } from "../../../../store/store"
// Base Styles for Tailwind
import "../../../../styles/index.scss"
import "../../../../styles/tour.scss"
import { ToursService } from "../../../../services/tours.service"
import { IStop, ITourDataResponse } from "../../../../interfaces/tour-data.interface"
import { AsyncFetchUtil } from "../../../../utils/async-fetch.util"
// Components
import NavBar from "../../../../components/v2/NavBar/NavBar"
import Footer from "../../../../components/Footer/Footer"
import JunketMainTourPage from "../../../../components/JunketTourPage/JunketMainTourPage"
import JunketMainTourMobilePage from '../../../../components/JunketTourPage/JunketMainTourMobilePage'
import LoadingOverlay from "../../../../components/LoadingOverlay/LoadingOverlay";
import Head from "next/head";

const SharableTourPage = ({
  error,
}: {
  error: any
  tourData: ITourDataResponse
}) => {
  const router = useRouter()
  const { city, junketName, junketId , junketStopId} = router.query
  const [tourData, setTourData] = useState<ITourDataResponse | undefined>(null)
  const [toursLoading, setToursLoading] = useState(true)


  useEffect(() => {
    setTourData(null)
      if (junketId) {
        AsyncFetchUtil.asyncDataFetching(
          ToursService.getSharableTourData,
          setTourData,
          setToursLoading,
          junketId
        )
      } else {
        setToursLoading(false)
      } 
  }, [junketId])


  const handleClickOnStop = (id) => {
    const stop = stops.find((s) => s.id === id);
    if (stop) {
      router.push("/junkets/"+tourCity+"/"+tourName+"/"+junketId+"/"+id)
    }
  }

  let stops = [];
  let pricing_type = '';
  if (tourData) {
    stops = tourData.stops;
    pricing_type = tourData.tour.pricing_type;
  }

  let isPaywallOpen = false;
  if (junketStopId) {
    let index = stops.findIndex(it => +it.id == +junketStopId);
    isPaywallOpen = Boolean(pricing_type !== 'free' && index > 1);
  }

  let defaultStop = junketStopId ? stops.find(it => +it.id == +junketStopId) : null;
  const [currentStop, setCurrentStop] = React.useState(defaultStop)
  if (!currentStop && defaultStop || currentStop && defaultStop && currentStop.id != defaultStop.id) {
    setCurrentStop(defaultStop);
  }

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

  if((tourCity != city) || ( tourName != junketName) ){
    return (
      <div> The url format is not correct. </div>
    )
  }

  function showBookNowDialog(junketId){
    // @ts-ignore
    if (!window.wejunket){
      return;
    }

    const container = document.getElementById('book-dialog-container');
    const modal = document.createElement('div');
    modal.id = 'wejunketbookWidgetModal';
    modal.className = `wejunket-modal`;
    const modal_content = document.createElement('div');
    modal_content.className = `wejunket-modal-content`;
    const widget = window.document.createElement('div');
    widget.className = 'wejunketbook-widget';
    modal_content.appendChild(widget);
    modal.appendChild(modal_content);
    container.appendChild(modal);

    // @ts-ignore
    window.wejunket(junketId)
  }

  return (
    <React.Fragment>
      <Head>
        <script src="https://wejunket.com/js/widget.js"/>
      </Head>
      <NavBar black />
        <div className="tour-container">
            <JunketMainTourPage
              showBookNowDialog={showBookNowDialog}
              tourData={tourData}
              junketId={junketId}
              handleClickOnStop={handleClickOnStop}
              isPaywallOpen={isPaywallOpen}
              currentStop={currentStop}
            />
          <Footer />
        </div>
        <JunketMainTourMobilePage
          showBookNowDialog={showBookNowDialog}
          junketId={junketId}
          tourData={tourData}
          handleClickOnStop={handleClickOnStop}
          isPaywallOpen={isPaywallOpen}
          currentStop={currentStop}
        />
      <div id="book-dialog-container"></div>
    </React.Fragment>
  )
}

// export const getStaticProps = wrapper.getStaticProps(async ({ store }) => {
//   store.dispatch(getTour(10002))
// })

// export async function getStaticPaths() {
//   return {
//     // Opt-out of the described fallback behavior
//     fallback: false,
//     paths: [
//       // This renders /blog/hello-world to HTML at build time
//       { params: { city: "williamsburg", junketName: "williamsburg_ghost_tour", junketId: "10002" } }
//     ]
//   };
// }

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
