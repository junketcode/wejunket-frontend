import * as React from "react"



const AdventureGuideVideo = ({ title, src, openVideo }) => {
  return (
    <div className="one-video">
      <h3 className="video-title">{title}</h3>
      <div className="video-player">
        <div className="video-play-btn">
          <button onClick={() => openVideo(src)}><img src={require("../../../public/img/v2/red-play-btn.svg")} alt="red play button"/></button>
        </div>
      </div>
    </div>
  )
}

export default AdventureGuideVideo 
