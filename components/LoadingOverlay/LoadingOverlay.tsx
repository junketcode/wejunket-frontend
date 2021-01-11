import * as React from "react";
import LoadingSpinner from "../shared/LoadingSpinner/LoadingSpinner";

const LoadingOverlay = () => {
  return (
    <div
      id="loading-overlay"
      className="fixed flex justify-center w-full h-screen bg-blue-800 text-white"
    >
      <LoadingSpinner inverted={true} />
    </div>
  )
}

export default LoadingOverlay
