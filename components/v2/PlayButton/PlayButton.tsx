import * as React from "react"
import "./PlayButton.scss"

const PlayButton = ({}) => {
  return (
    <div className="container">
      <div className="play-btn-style">
        <img src={require("../../../public/img/v2/red-play-btn.svg")} alt="red play button"/>
        <p className="txt-style" >See it in action!</p>
      </div>
    </div>
  )
}

export default PlayButton
