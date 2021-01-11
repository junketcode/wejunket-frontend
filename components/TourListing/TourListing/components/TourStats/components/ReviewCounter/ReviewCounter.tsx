import * as React from "react"

const ReviewCounter = ({ latest_reviews }: any) => {
  return <div className="flex">{latest_reviews.length} Reviews</div>
}

export default ReviewCounter
