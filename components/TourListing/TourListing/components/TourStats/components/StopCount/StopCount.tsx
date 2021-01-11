import * as React from "react"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMapMarkerAlt} from "@fortawesome/free-solid-svg-icons";

const StarRating = ({ stops_count }: any) => {
  return (
    <div className="flex w-1/2 md:w-1/12">
      <FontAwesomeIcon icon={faMapMarkerAlt} className='text-gray-800 mr-2'  style={{fontSize: '1.5rem'}}/>
      {stops_count}
    </div>
  )
}

export default StarRating
