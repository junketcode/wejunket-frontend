import React from "react"
import "./Youtube.scss"

const Youtube = props => {
  const { white } = props
  return (
    <div className="youtubeContainer">
      <img
        src={
          white
            ? require("../../../../public/img/2020/youtube-white.svg")
            : require("../../../../public/img/2020/youtube.svg")
        }
        alt="youtube"
        className="youtubeIcon"
      />
    </div>
  )
}

export default Youtube
