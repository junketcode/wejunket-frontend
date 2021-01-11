import * as React from "react"
import "./Guide.scss"

const Guide = ({}) => {
  return (
    <div className="juket-guide container">
      <div className="guide-top">
        <div className="choose-adventure">
          <img src={require("../../../public/img/v2/icons/map.svg")} alt="treasure map representing adventure"/>
          <h3 className="guid-subtitle">CHOOSE YOUR OWN ADVENTURE</h3>
          <p>
            Add excitement to real world experiences with virtual scavenger hunts and multi-path adventures. Solve puzzles to find your next stop or take a detour into history, earn a trophy, or win a prize.
          </p>
        </div>
        <div className="guide-img">
          <img className="red-polygon" src={require("../../../public/img/v2/polygon.svg")} alt="red polygon"/>
          <img className="phone" src={require("../../../public/img/v2/phone-frame2.svg")} alt="blank phone frame"/>
        </div>
        <div className="team-build">
          <img src={require("../../../public/img/v2/icons/hands.svg")} alt="clasping hands representing team"/>
          <h3 className="guid-subtitle">TEAM BUILDING, ORIENTATION, INCENTIVES & ONBOARDING</h3>
          <p>
            Build trust within your teams, create connections to a new place, or an old one. Share the challenge of solving puzzles, unlocking secrets, and playing the game to win prizes or just for fun.
          </p>
        </div>
      </div>
      <div className="guide-bottom"> 
        <img src={require("../../../public/img/v2/icons/money.svg")} alt="money graphic"/>
        <h3 className="guid-subtitle">JUNKET LETS ANYONE DESIGN AND PUBLISH THEIR IMMERSIVE STORY AND EARN MONEY!</h3>
        <p className="green-subtitle">WHERE TO NEXT?</p>
      </div>
    </div>
  )
}

export default Guide
