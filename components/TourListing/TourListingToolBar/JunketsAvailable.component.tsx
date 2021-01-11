import React from "react"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMapMarkerAlt} from "@fortawesome/free-solid-svg-icons";

const JunketsAvailable = (props) => {

    return (
        <div className="bg-blue-600 h-10 w-20 flex justify-center items-center text-white rounded-lg">
            {/* <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2"/> */}
            <p>{props.toursAvailable}</p>
        </div>
    )
}

export default JunketsAvailable
