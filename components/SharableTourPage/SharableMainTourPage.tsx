import * as React from "react"
import TourTitle from "../TourListing/TourListing/components/TourTitle/TourTitle"
import TourStats from "../TourListing/TourListing/components/TourStats/TourStats"
// import JunketsMap from "../TourListing/JunketsMap/JunketsMap"
import CallToActionButton from "../DynamicComponent/components/CallToActionButton/CallToActionButton"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons/faMapMarkerAlt"
import {
  IStop,
  ITour,
  ITourDataResponse,
} from "../../interfaces/tour-data.interface"
import YouTubePlayer from "react-player/lib/players/YouTube"
import "./SharableTourPage.scss"

const MainTourPage = ({
  tour,
  tourData,
  description,
  main_image,
  stops,
  handleClickOnStop,
}: {
  tour: ITour
  tourData: ITourDataResponse
  description: string
  main_image: string
  stops: IStop[]
  handleClickOnStop: any
}) => {
  const buttonClasses = [
    "w-full",
    "lg:w-1/3",
    "mt-4",
    "bg-white",
    "font-bold",
    "text-sm",
    "md:text-lg",
    "uppercase",
    "py-2",
    "px-4",
    "border",
    "rounded-lg",
  ].join(" ")

  return (
    <React.Fragment>
      <div className="flex justify-between flex-wrap width-full sharable-tour">
        <div className="flex p-6 flex-col w-full md:w-1/2">
          <div className=" visible-mobile">
            {tour.video_url ? (
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
            ) : (
              <img
                className="border border-transparent rounded-lg bg-transparent p-4 wh-100"
                alt={`${tour.title} Featured Image`}
                src={main_image}
              />
            )}
          </div>
          <TourTitle tour={tour} inline={true} />
          <TourStats tourData={tourData} />
          <div className="flex">
            <CallToActionButton
              {...({
                displayText: "Start Junket",
                cssClasses: buttonClasses,
              } as any)}
              onClick={handleClickOnStop(stops[0].id)}
              gradientStyle={true}
            />
          </div>
          <div className="flex mt-6">
            <p className="w-full break-words flex-wrap">{description}</p>
          </div>
        </div>
        <div className="flex flex-col md:p-6 w-full md:w-1/2">
          <div className="visible-desktop">
            {tour.video_url ? (
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
            ) : (
              <img
                className="border border-transparent rounded-lg bg-transparent p-4 wh-100"
                alt={`${tour.title} Featured Image`}
                src={main_image}
              />
            )}
          </div>
          {tourData.tour.intro_audio ? (
              <audio
                  src={tourData.tour.intro_audio}
                  controls
                  className="w-full pb-4"
              />
          ) : null}
          {/* <JunketsMap stops={stops} zoom={14} handleClickOnStop={handleClickOnStop}/> */}
          <div
            style={{ height: "290px", overflow: "scroll" }}
            className="flex p-4 mb-4 mt-2"
          >
            <ul className="w-full">
              {stops &&
                stops.map((stop: IStop) => (
                  <li
                    key={stop.id}
                    onClick={handleClickOnStop(stop.id)}
                    className="h-8 flex rounded-lg items-center bg-gray-200 mt-2 mb-2 hover:bg-blue-600 cursor-pointer"
                  >
                    <div className="bg-white ml-4 mr-2 rounded-full h-6 w-6 flex items-center justify-center border border-blue-600 border-solid border-1">
                      <FontAwesomeIcon icon={faMapMarkerAlt} />
                    </div>
                    {stop.order} - {stop.title}
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default MainTourPage
