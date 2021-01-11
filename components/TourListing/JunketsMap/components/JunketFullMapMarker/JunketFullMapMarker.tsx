import * as React from "react"
import Link from "next/link"

const JunketFullMapMarker = ({ slug, city, name }: any) => {
  const urlCity = city.replace(/ /g, "_").toLowerCase()
  const urlTitle = name.replace(/-/g, "").replace(/  /g, "").replace(/ /g, "_").toLowerCase()

  return (
    <Link href={`/junkets/${urlCity}/${urlTitle}/${slug}`}>
      <div className="cursor-pointer -mt-4 -ml-1">
        <img className="junket-map-pin" src={require('../../../../../public/img/icons/location-pin.png')} />
      </div>
    </Link>
  )
}

export default JunketFullMapMarker
