import React, { useState } from "react"
import ReactPlayer from "react-player"
import "./VideoSection.scss"

const VideoSection = () => {
  const [playing, setPlaying] = useState(false);

  const handlePlay = () => {
      setPlaying(!playing)
  }

  return (
    <section id="video-section" className="videoSectionRoot">
      <div className="videoContainer">
        <ReactPlayer url="https://youtu.be/pi-Uj6qB33I" playing={playing} width="100%" title="Junket: Explore your World!"/>
        <button className="watchButton" onClick={handlePlay} name="Watch Video">Watch Video</button>
      </div>
    </section>
  )
}

export default VideoSection
