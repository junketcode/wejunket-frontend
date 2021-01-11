import * as React from "react"
import clsx from 'clsx'
import environment from "../../../environment/environment"
import GoogleMapReact, { Coords } from "google-map-react"
import JunketTourMarker from "./components/JunketTourMarker/JunketTourMarker"
import { IStop, ITour } from "../../../interfaces/tour-data.interface"
import * as turf from "@turf/turf"

const GMAPS_API_KEY = environment.GOOGLE_MAPS_API_KEY

const JunketsMap = ({
  stops,
  activeStop,
  onStopClick,
  zoom,
  full,
  className,
}: {
  stops: (IStop | ITour)[]
  zoom?: number
  activeStop?: IStop
  onStopClick?: any
  full?: boolean
  className?: String
}) => {
  let mapCenter
  let mapZoom = zoom | 3

  const features = turf.featureCollection(
    stops.map(stop =>
      turf.point([
        stop.location.longitude ? stop.location.longitude : 0,
        stop.location.latitude ? stop.location.latitude : 0,
      ])
    )
  )

  const center = turf.center(features)
  mapCenter = {
    lat: center.geometry.coordinates[1],
    lng: center.geometry.coordinates[0],
  }

  if (activeStop) {
    mapCenter = {
      lat: activeStop.location.latitude,
      lng: activeStop.location.longitude,
    }
    mapZoom = 16
  }

  return (
    <div
      className={[
        full ? null : "px-2 pr-0",
        full ? null : "lg:px-4 lg:pr-0",
        className,
        "w-full",
        'junket-stop-map',
        "text-white",
      ].join(" ")}
    >
      {mapCenter && (
        <GoogleMapReact
          bootstrapURLKeys={{ key: GMAPS_API_KEY }}
          center={mapCenter}
          zoom={mapZoom}
          yesIWantToUseGoogleMapApiInternals
        >
          {stops &&
            stops.map((stop, i) => (
              <JunketTourMarker
                slug={stop.id}
                key={stop.id}
                lat={stop.location.latitude}
                lng={stop.location.longitude}
                text={stop.title}
                isSelected={activeStop && activeStop.id === stop.id}
                onStopClick={() => onStopClick(stop, i)}
              />
            ))}
        </GoogleMapReact>
      )}
    </div>
  )
}

export default JunketsMap
