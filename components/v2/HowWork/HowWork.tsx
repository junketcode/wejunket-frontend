import * as React from "react"
import "./HowWork.scss"

const HowWork = ({}) => {
  return (
    <div className="how-work container">
      <p className="blue-text take-history">TAKE A FOOD TOUR OR A DEEP DIVE INTO HISTORY</p>
      <h3 className="grey-title take-adventure">Take a tour or go on an adventure</h3>
      <img src={require("../../../public/img/v2/sufering1.svg")} alt=""/>

      <div className="frame-list">  
        <div>
          <p>Defend Your City Against Alien Invasion</p>
          <img src={require("../../../public/img/v2/alien-defense.png")} alt="defend city against alien tour"/>
        </div>
        <div className="deeper">
          <p>Solve Edgar Allen Poe's Mysteries</p>
          <img src={require("../../../public/img/v2/edgar-allen.png")} alt="edgar allen tour"/>
        </div>
        <div className="large-screen">
          <p>Take a Ghost Tour in One of 25 Cities</p>
          <img src={require("../../../public/img/v2/ghost-tour.png")} alt="ghost tours"/>
        </div>
        <div className="deeper">
          <p>Enjoy Food Tours and Brewery Tours</p>
          <img src={require("../../../public/img/v2/food-tour.png")} alt="food tour"/>
        </div>
        <div>
          <p>Tour the Boston Freedom Trail, or Colonial Williamsburg</p>
          <img src={require("../../../public/img/v2/historic-tour.png")} alt="historic tour"/>
        </div>
      </div>

      {/* <div className="how-work-action">
        <p className="red-text">How it Works</p>
        <img src={require("../../../public/img/v2/icons/arrow-btn.svg")} alt="arrow button"/>
      </div> */}
    </div>
  )
}

export default HowWork 
