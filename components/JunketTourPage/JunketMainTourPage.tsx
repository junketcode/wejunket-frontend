import * as React from "react"
import JunketTourTitle from "./JunketTourTitle/JunketTourTitle"
import JunketsMap from "../TourListing/JunketsMap/JunketsMap"
import CallToActionButton from "../DynamicComponent/components/CallToActionButton/CallToActionButton"
import {
  ITourDataResponse,
} from "../../interfaces/tour-data.interface"
import JunketIntroAudio from './JunketIntroAudio/JunketIntroAudio'
import YouTubePlayer from "react-player/lib/players/YouTube"
import JunketImgSlider from './JunketSlider/JunketImgSlider'
import BookNowBtn from './BookNowButton/BookNowButton'
import StopSlider from './JunketSlider/StopSlider'
import JunketsFullMap from '../TourListing/JunketsMap/JunketsFullMap'
import Paywall from './Paywall/Paywall'
import AppStoreGroup from '../v2/AppStoreGroup/AppStoreGroup'
import "./JunketTourPage.scss"



const JunketMainTourPage = ({
  tourData,junketId,showBookNowDialog,handleClickOnStop,isPaywallOpen,currentStop,
}: {
  tourData: ITourDataResponse
  handleClickOnStop: any,
  junketId:any,
  showBookNowDialog:any,
  currentStop:any,
  isPaywallOpen:boolean,
}) => {

  const { tour, stops } = tourData
  const { intro_audio, description, main_image, title, images, pricing_type } = tour

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
      <div className="width-full junket-tour">
        <div className="flex p-6 pl-0 flex-col w-full md:w-1/2 junket-tour-left">
          <JunketTourTitle
            tour={tour}
            inline={true}
            stop={currentStop}
          />
          {!currentStop && intro_audio && <JunketIntroAudio src={intro_audio} />}
          {!!currentStop && currentStop.intro_audio && <JunketIntroAudio src={currentStop.intro_audio} />}
          <div className="flex tour-description">
            <p className="w-full break-words flex-wrap">{!currentStop ? description : currentStop.description}</p>
          </div>
        </div>
        <div className="flex flex-col p-6 pr-0 w-full md:w-1/2 junket-tour-right">
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
            <JunketImgSlider images={images} />
          }
          {!currentStop && !tour.video_url && !images.length &&
            <img
              className="border border-transparent rounded-lg bg-transparent wh-100 junket-main-image"
              alt={`${title} Featured Image`}
              src={main_image}
            />
          }
          {!!currentStop && !currentStop.video_url &&
            <JunketImgSlider images={currentStop.images} />
          }
          {!!currentStop && !currentStop.video_url && !currentStop.images.length &&
            <img
              className="border border-transparent rounded-lg bg-transparent wh-100 junket-main-image"
              alt={`${currentStop.title} Featured Image`}
              src={currentStop.main_image}
            />
          }
          {/* <BookNowBtn pricingType={pricing_type} /> */}
          { width > 1024 && junketId && getBookNowButton() }
        {/*  <AppStoreGroup />*/}
          {
            pricing_type === 'free' && <AppStoreGroup />
          }
          <StopSlider
            stops={stops}
            current={currentStop}
            setStop={(stop)=>handleClickOnStop(stop.id)}
          />
          <div
            className="flex pl-4 junket-list"
          >
            <ul className="w-full m-auto">
              {stops &&
                stops.map((stop, i) => (
                  <li
                    key={stop.id}
                    onClick={() => handleClickOnStop(stop.id)}
                    className="junket-stop-list"
                  >
                    <img src={require("../../public/img/icons/list-location-pin.png")} alt="" />
                    {stop.order}. {stop.title}
                  </li>
                ))}
            </ul>
          </div>
          {!isPaywallOpen &&
            <JunketsMap className={'junket-map'} stops={stops} zoom={14} onStopClick={(stop,i)=>handleClickOnStop(stop.id)}/>
          }
        </div>
        {width > 1024 && <Paywall showBookNowDialog={showBookNowDialog} junketId={junketId} isOpen={isPaywallOpen}/>}
      </div>
      <JunketsFullMap/>
    </React.Fragment>
  )
}

export default JunketMainTourPage
