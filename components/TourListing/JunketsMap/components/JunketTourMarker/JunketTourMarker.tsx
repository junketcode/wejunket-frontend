import * as React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons"
import Link from "next/link"

const JunketTourMarker = ({ slug, isSelected, onStopClick }: any) => {
  return onStopClick ? (
    <div className="cursor-pointer -mt-4 -ml-1">
      {isSelected ? (
        <FontAwesomeIcon
          icon={faMapMarkerAlt}
          className="text-red-600"
          style={{ fontSize: "1.5rem" }}
          onClick={onStopClick}
        />
      ) : (
        <FontAwesomeIcon
          icon={faMapMarkerAlt}
          className="text-gray-600"
          style={{ fontSize: "1.5rem" }}
          onClick={onStopClick}
        />
      )}
    </div>
  ) : (
    <Link href={`junket/${slug}`}>
      <div className="cursor-pointer -mt-4 -ml-1">
        {isSelected ? (
          <FontAwesomeIcon
            icon={faMapMarkerAlt}
            className="text-red-600"
            style={{ fontSize: "1.5rem" }}
          />
        ) : (
          <FontAwesomeIcon
            icon={faMapMarkerAlt}
            className="text-gray-600"
            style={{ fontSize: "1.5rem" }}
          />
        )}
      </div>
    </Link>
  )
}

export default JunketTourMarker
