import React, { useEffect, useState } from "react"
import JunketTourTitle from "./JunketTourTitle/JunketTourTitle"
// import JunketsMap from "../TourListing/JunketsMap/JunketsMap"
import { IStop, ITour } from "../../interfaces/tour-data.interface"
import StopMapListItem from "./StopMapListItem/StopMapListItem"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAngleRight } from "@fortawesome/free-solid-svg-icons/faAngleRight"
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons/faAngleLeft"

import "./JunketTourPage.scss"

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

  return (
    <React.Fragment>
      <div className="width-full junket-tour">
        <div className="flex p-6 flex-col w-full md:w-1/2 junket-tour-left">
          <JunketTourTitle tour={tour} stop={activeStop} inline={true} />
          
          <div className="video-container">
            <img
              className="border border-transparent rounded-lg bg-transparent react-player wh-100"
              alt={`${tour.title} Featured Image`}
              src={main_image}
            />
          </div>

          {/* Audio */}
          {activeStop.intro_audio ? (
              <audio src={activeStop.intro_audio} controls className="w-full pt-4"/>
            ) : null}
         
        </div>
        <div className="flex flex-col md:p-6 w-full md:w-1/2 junket-tour-right">
          {/* Map */}
          {/* <JunketsMap className={'junket-map'} stops={stops} activeStop={activeStop} zoom={15} handleClickOnStop={handleClickOnStop}/> */}

          {/* Next Button */}
          <div className="flex btn-group">
            <button className={'btn-stop-list btn-prev'} onClick={handleClickNextPrev(-1)}>
              <FontAwesomeIcon icon={faAngleLeft} />
              &nbsp;&nbsp;PREVIOUS
            </button>
            <button className={'btn-stop-list btn-next'} onClick={handleClickNextPrev(+1)}>
              NEXT&nbsp;&nbsp;
              <FontAwesomeIcon icon={faAngleRight} />
            </button>
          </div>

          {/* Stop List */}
          <div
            style={{ height: "auto", overflow: "auto" }}
            className="flex p-4 junket-list"
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
      <div className="flex p-6">
        <p className="w-full break-words flex-wrap">{description}</p>
      </div>
    </React.Fragment>
  )
}

export default StopTourPage
