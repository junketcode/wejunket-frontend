import * as React from "react"
import TourItem from "./components/TourItem/TourItem";
import {ITour} from "../../../interfaces/tour-data.interface";

const TourListing = (props: any) => {
  const {tours} = props;
  if (!tours || !tours.length) {
    return <div>There has been an error Loading...</div>
  }
  return (
    <React.Fragment>
      {tours && tours.map((tour: ITour) => <TourItem key={tour.id} tour={tour} />)}
    </React.Fragment>
  )
}

export default TourListing
