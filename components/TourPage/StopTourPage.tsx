import * as React from "react"
import TourTitle from "../TourListing/TourListing/components/TourTitle/TourTitle"
// import JunketsMap from "../TourListing/JunketsMap/JunketsMap"
import { IStop, ITour } from "../../interfaces/tour-data.interface"
import StopMapListItem from "./components/StopMapListItem/StopMapListItem"

const StopTourPage = ({
  activeStop,
  tour,
  stops,
  handleClickOnStop,
  handleClickNextPrev,
}: {
  activeStop: IStop
  tour: ITour
  stops: IStop[]
  handleClickOnStop: any
  handleClickNextPrev: any
}) => {
  const { description, main_image } = activeStop

  const buttonClasses = [
    "w-full",
    "lg:w-1/3",
    "mt-4",
    "font-bold",
    "text-sm",
    "md:text-lg",
    "uppercase",
    "py-2",
    "px-4",
    "border",
    "rounded-lg",
    "bg-green-800",
    "text-white",
  ].join(" ")

  return (
    <React.Fragment>
      <div className="flex mt-24">
        <button
          className="w-40 border rounded-full bg-blue-800 text-white p-2"
          onClick={handleClickOnStop()}
        >
          Back
        </button>
      </div>
      <div className="flex justify-between flex-wrap width-full">
        <div className="flex p-6 flex-col w-full md:w-1/2">
          <TourTitle tour={tour} stop={activeStop} inline={true} />
          <div className="flex">
            <button className={buttonClasses} onClick={handleClickNextPrev(-1)}>
              Prev Stop
            </button>
            <button className={buttonClasses} onClick={handleClickNextPrev(+1)}>
              Next Stop
            </button>
          </div>
          <div className="flex mt-6">
            <p className="w-full break-words flex-wrap">{description}</p>
          </div>
        </div>
        <div className="flex flex-col md:p-6 w-full md:w-1/2">
          <img
            className="border border-transparent rounded-lg bg-transparent p-4"
            alt={`${tour.title} Featured Image`}
            src={main_image}
          />
          {activeStop.intro_audio ? (
            <audio src={activeStop.intro_audio} controls className="w-full pb-4"/>
          ) : null}
          {/* <JunketsMap stops={stops} activeStop={activeStop} zoom={15} handleClickOnStop={handleClickOnStop}/> */}
          <div
            style={{ height: "290px", overflow: "scroll" }}
            className="flex p-4 mb-4 mt-2"
          >
            <ul className="w-full">
              {stops &&
                stops.map(s => (
                  <StopMapListItem
                    key={s.id}
                    stop={s}
                    handleClickOnStop={handleClickOnStop}
                    isActive={s.id === activeStop.id}
                  />
                ))}
            </ul>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default StopTourPage
