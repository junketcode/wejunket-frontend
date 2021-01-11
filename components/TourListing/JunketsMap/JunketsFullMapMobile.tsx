import * as React from "react"
import environment from "../../../environment/environment"
import GoogleMapReact, { Coords } from "google-map-react"
import JunketFullMapMarker from "./components/JunketFullMapMarker/JunketFullMapMarker"
import * as turf from "@turf/turf"
import { AsyncFetchUtil } from "../../../utils/async-fetch.util"
import { ITourListResponse } from "../../../interfaces/tour-data.interface"
import { ToursService } from "../../../services/tours.service"
import JunketsSliderMobile from './components/JunketsSlider/JunketsSliderMobile'
import './JunketsFullMap.scss'

const GMAPS_API_KEY = environment.GOOGLE_MAPS_API_KEY

const JunketsFullMapMobile = ({ activeNav, title }) => {
  const [tourList, setTourList] = React.useState<ITourListResponse | undefined>(
    undefined
  )
  const [mapCenter, setMapCenter] = React.useState(null)

  React.useEffect(() => {
    if (!tourList) {
      AsyncFetchUtil.asyncDataFetching(
        ToursService.getFreeJunkets,
        setTourList
      )
    }
  }, [])

  React.useEffect(() => {
    if (!!tourList) {
      const features = turf.featureCollection(
        tourList.data.map(tourData =>
          turf.point([
            tourData.location.longitude ? tourData.location.longitude : 0,
            tourData.location.latitude ? tourData.location.latitude : 0,
          ])
        )
      )

      const center = turf.center(features)
      setMapCenter({
        lat: center.geometry.coordinates[1],
        lng: center.geometry.coordinates[0],
      })
    }
  }, [tourList])

  return (
    <div className={`w-full junkets-full-map-container mobile-junket-item ${ activeNav === 2 && 'active' }`}>
      <h3 className="grey-title">{title}</h3>
      <div className='w-full text-white junkets-full-map'>
        {mapCenter && (
          <GoogleMapReact
            bootstrapURLKeys={{ key: GMAPS_API_KEY }}
            center={mapCenter}
            zoom={3}
            yesIWantToUseGoogleMapApiInternals
          >
            {tourList &&
              tourList.data.map(tour => (
                <JunketFullMapMarker
                  slug={tour.id}
                  key={tour.id}
                  lat={tour.location.latitude}
                  lng={tour.location.longitude}
                  text={tour.title}
                  city={tour.location.city}
                  name={tour.title}
                />
              ))}
          </GoogleMapReact>
        )}
      </div>
      { tourList && <JunketsSliderMobile junkets={tourList.data} />}
    </div>
  )
}

export default JunketsFullMapMobile