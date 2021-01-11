import * as React from "react"
import Router from "next/router"
import Link from "next/link";
import { ITour } from "../../../../../interfaces/tour-data.interface"
import TourStats from "../TourStats/TourStats"
import TourTitle from "../TourTitle/TourTitle";

const TourItem = (props: { tour: ITour }) => {
  const { tour } = props
  if (!tour) {
    throw new Error("No Tour Data Found")
  }

  const goToTour = () => {
    const urlCity = tour.location.city.replace(/ /g, "_").toLowerCase()
    const urlTitle = tour.title.replace(/-/g, "").replace(/  /g, "").replace(/ /g, "_").toLowerCase()
    Router.push(`/junkets/${urlCity}/${urlTitle}/${tour.id}`)
  }

  const { title, description, main_image } = tour

  return (
    <div className="p-2 w-full">
      <div
        className="flex flex-col md:flex-row p-4"
        style={{ minHeight: "400px" }}
      >
        {/* Feature Image */}
        <div className="flex w-full md:w-5/12 md:order-last min-h-full justify-center align-middle">
          <div style={{ height: "200" }}>
            <img
              className="border border-transparent rounded-lg bg-transparent"
              alt={`${title} Featured Image`}
              src={main_image ? main_image.path : ''}
            />
          </div>
        </div>

        {/* Tour Description Image */}
        <div className="flex px-4 w-full md:w-7/12 min-h-full flex-col">
          <TourTitle tour={tour}/>
          <TourStats tourData={{ tour }} />
          <div className="flex">
            <div style={{ maxHeight: "198px", overflow: "hidden" }}>
              <p>{description}</p>
            </div>
          </div>
          <div className="flex mt-4 py-2 justify-end mt-auto">
            <button
              className="w-40 border rounded-lg bg-blue-600 text-white p-2"
              onClick={goToTour}
            >
              More
            </button>
          </div>
        </div>

      </div>
    </div>
  )
}

export default TourItem
