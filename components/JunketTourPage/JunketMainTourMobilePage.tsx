import * as React from "react"
import JunketTourTitle from "./JunketTourTitle/JunketTourTitle"
import {
  ITourDataResponse,
} from "../../interfaces/tour-data.interface"
import JunketIntroAudio from './JunketIntroAudio/JunketIntroAudio'
import YouTubePlayer from "react-player/lib/players/YouTube"
import BookNowBtn from './BookNowButton/BookNowButton'
import JunketsFullMapMobile from '../TourListing/JunketsMap/JunketsFullMapMobile'
import MobileNav from './MobileNav/MobileNav'
import Paywall from './Paywall/Paywall'
import AppStoreGroup from  '../v2/AppStoreGroup/AppStoreGroup'
import "./JunketTourPage.scss"



const JunketMainTourPageMobile = ({
  tourData,
  handleClickOnStop,
  junketId,
  showBookNowDialog,
  isPaywallOpen,
  currentStop,
}: {
  tourData: ITourDataResponse
  handleClickOnStop: any,
  junketId:any,
  showBookNowDialog,
  currentStop:any,
  isPaywallOpen:boolean,
}) => {
  const [activeNav, setActiveNav] = React.useState(1)
  const { tour, stops } = tourData
  const { main_image, intro_audio, description, pricing_type } = tour

  const width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

  function getBookNowButton() {
    return <button
              className="wejunketbookWidgetOpenModal"
              data-id={junketId} onClick={() => {
                showBookNowDialog(junketId)
              }}
          >
            Book now
          </button>;
  }

  return (
    <React.Fragment>
      <div className="w-full junket-mobile">
        <MobileNav
          activeNav={activeNav}
          setActiveNav={setActiveNav}
        />
        <div className={`mobile-tour mobile-junket-item ${activeNav === 1 && 'active'}`}>
          <JunketTourTitle 
            tour={tour} 
            inline={true} 
            stop={currentStop}  
          />
          <div className="visible-desktop">
          {!currentStop && !!tour.video_url && (
              <div className="video-container">
                <YouTubePlayer
                  url={tour.video_url}
                  playing={false}
                  preload=""
                  width="100%"
                  height="100%"
                  className="react-player"
                />
              </div>
            )}
            {!!currentStop && !!currentStop.video_url && (
              <div className="video-container">
                <YouTubePlayer
                  url={currentStop.video_url}
                  playing={false}
                  preload=""
                  width="100%"
                  height="100%"
                  className="react-player"
                />
              </div>
            )}
            {!currentStop && !tour.video_url &&
              <img
                className="border border-transparent rounded-lg bg-transparent wh-100 junket-main-image"
                alt={`${tour.title} Featured Image`}
                src={!currentStop ? main_image : currentStop.main_image}
              />
            }
            {!!currentStop && !currentStop.video_url &&
              <img
                className="border border-transparent rounded-lg bg-transparent wh-100 junket-main-image"
                alt={`${tour.title} Featured Image`}
                src={!currentStop ? main_image : currentStop.main_image}
              />
            }
          </div>
          {!currentStop && intro_audio && <JunketIntroAudio src={intro_audio} />}
          {!!currentStop && currentStop.intro_audio && <JunketIntroAudio src={currentStop.intro_audio} />}
          <div className="flex tour-description">
            <p className="w-full break-words flex-wrap">{!currentStop ? description : currentStop.description}</p>
          </div>
          <div className="book-btn-container">
            {/* <BookNowBtn pricingType={pricing_type} /> */}
            { width <= 1024 && junketId  && getBookNowButton() }
           {/* <AppStoreGroup />*/}
          </div>
          {
            pricing_type === 'free' && <AppStoreGroup />
          }
        </div>
        <JunketsFullMapMobile
          title={tour.title}
          activeNav={activeNav}
        />
        <div className={`mobile-stop mobile-junket-item ${activeNav === 3 && 'active'}`}>
          <h3 className="grey-title">{tour.title}</h3>
          {stops &&
            stops.map((stop, i) => (
              <div
                key={stop.id}
                onClick={() => {handleClickOnStop(stop.id);setActiveNav(1);}}
                className="junket-stop-item"
              >
                <img src={stop.main_image} alt={stop.title} className="stop-image" />
                <div className="stop-title">
                  <img src={require('../.../../../public/img/pages/junket/stop-pin.png')} className="stop-pin" />
                  {stop.order}. {stop.title}
                </div>
              </div>
            ))}
        </div>
      </div>
      { isPaywallOpen && width <= 1024 && <div className="paywall-container-mobile">
        <Paywall showBookNowDialog={showBookNowDialog} junketId={junketId} isOpen={isPaywallOpen}/>
      </div>}
    </React.Fragment>
  )
}

export default JunketMainTourPageMobile
