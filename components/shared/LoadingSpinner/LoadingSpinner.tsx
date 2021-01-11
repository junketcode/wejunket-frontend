import * as React from "react"
import "./LoadingSpinner.scss"

const LoadingSpinner = ({inverted}: any) => {
  return (inverted) ? <div className="loader white">Loading...</div> : <div className="loader">Loading...</div>
}

export default LoadingSpinner
