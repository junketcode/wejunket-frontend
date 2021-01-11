import * as React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMapSigns } from "@fortawesome/free-solid-svg-icons"

const DistanceIndicator = ({ length }: any) => {

  return (
      <div className="flex w-1/2 md:w-48 justify-end md:justify-center">
        <FontAwesomeIcon
          icon={faMapSigns}
          className="text-gray-800 mr-2"
          style={{ fontSize: "1.5rem" }}
        />
        {length} km
      </div>
  )
}

export default DistanceIndicator
