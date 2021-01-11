import * as React from "react"
import "./StarRating.scss"
import StarRatingComponent from "react-star-rating-component";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faStar} from "@fortawesome/free-solid-svg-icons";

const StarRating = ({ rating }: any) => {
  const percentage = (rating / 10) * 100
  return (
    <div className="flex rating-holder w-1/1 md:w-2/12">
      <StarRatingComponent
        name='Tour Rating'
        value={percentage}
        renderStarIcon={() => <FontAwesomeIcon icon={faStar} />}
        editable={false}
      />
    </div>
  )
}

export default StarRating
