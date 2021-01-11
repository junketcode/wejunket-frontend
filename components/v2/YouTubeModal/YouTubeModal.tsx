import React from "react"
import "./YouTubeModal.scss"

const YouTubeModal = (props) => {
  return (
    <div
      className={["YTmodalRoot", props.modalOpen ? "YTopen" : "YTclosed"].join(" ")}
      onClick={props.closeModalHandler}
    >
      <h1 className="YTcloseModalX" onClick={props.closeModalHandler}>
        X
      </h1>
      <div className="YTiframeContainer">
        <iframe width="560" height="315" src={props.youtubeURL} frameBorder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
      </div>
    </div>
  )
}

export default YouTubeModal