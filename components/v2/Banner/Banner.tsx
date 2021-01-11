import * as React from "react"
import "./Banner.scss"
import AppStore from "../../2020/Social/AppStore/AppStore"


const Banner = ({ openModalHandler }) => {

  const yesHandler = () => {
    openModalHandler()
  }

  return (
    <div className="wejunket-banner container">
      <div className="banner-left">
        <h3 className="banner-title grey-title">Junkets are adventures and experiences in your pocket.</h3>
        <img src={require("../../../public/img/v2/sufering1.svg")} alt="dotted wavy path"/>
        <p className="banner-description">Walk alongside expert narrators at your pace, skip ahead, or dive deeper through video and audio triggered by GPS. Reveal the layers behind your city, or a city across the world.</p>
        <div className="download-app">
          <AppStore className="apple" />
          <AppStore className="google" />
        </div>
        <div className="play-btn-style">
          <button onClick={yesHandler} id="myBtn"><img src={require("../../../public/img/v2/red-play-btn.svg")} alt="red play button"/></button>
          <p className="txt-style" >See it in action!</p>
        </div>
      </div>
      <div className="banner-right">
        <p className="choose-next">You choose where to go next.</p>
        <div className="phone-frame">
          <img className="phone1" src={require("../../../public/img/v2/hero-banner-phone.png")} alt="hero banner phone frame"/>
        </div>
      </div>
    </div>
  )
}

export default Banner
