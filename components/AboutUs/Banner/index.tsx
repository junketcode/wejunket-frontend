import * as React from "react"
import "./Banner.scss"


const Banner =  () => {
  return (
    <div className="wejunket-banner container">
      <div className="banner-left">
        <h3 className="banner-title grey-title">"Think of a Junket adventure as an outdoor escape room"</h3>
        <p className="banner-description">Lance Zaal, Founder & CEO</p>
      </div>
      <div className="banner-right">
        {/* <BannerImg /> */}
        <div className="phone-frame">
          <img className="phone1" src={require("../../../public/img/pages/aboutus/banner.png")} alt="hero banner phone frame"/>
        </div>
      </div>
    </div>
  )
}

export default Banner
