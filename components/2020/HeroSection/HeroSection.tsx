import React from "react"
import "./HeroSection.scss"
import Apple from "../../DynamicComponent/components/AppStoreButtons/components/Apple"
import Google from "../../DynamicComponent/components/AppStoreButtons/components/Google"

const HeroSection = () => {
  return (
    <section id="junket-hero" className="heroSectionRoot">
      <div className="heroOverlay">
        <div className="heroContent">
          <div className="heroLeft">
            <div className="heroLeftTop">
              <img
                src={require('../../../public/img/logo/junket_color_12_21_17.png')}
                alt="junket logo"
                className="heroTopLeftLogo"
              />
              <h1 className="heroLeftTopHeader">Explore Your World</h1>
              <p className="heroLeftTopDownload">Download Now</p>
              <div className="heroLeftTopButtonsContainer">
                <Apple className="heroAppleButton" />
                <Google className="heroGoogleButton" />
              </div>
            </div>
            <div className="heroLeftBottom">
              <div className="heroLeftBottomMobile">
                <h1 className="heroLeftBottomHeader">Explore Your World</h1>
                <p className="heroLeftBottomText">
                  Junket lets you take virtual adventures and tours from your
                  mobile device! Think of it as an outdoor escape room. Whether
                  you are a traveler and want to turn your device into a tour
                  guide, represent a city or a zoo and want to give visitors a
                  fun virtual game or experience, or if you want to embark on a
                  fun scavenger hunt for that special person, Junket is your
                  app! It's hands free, and uses GPS, video, audio, and text for
                  a unique and enjoyable personal experience.
                </p>
              </div>
              <div className="heroMobilePhoneWrapper">
                <img
                  src={require("../../../public/img/2020/iphone-mock.png")}
                  className="heroMobilePhone"
                  alt="Hero Mobile Phone"
                />
              </div>
            </div>
          </div>
          <div className="heroRight">
            <div className="heroRightPhoneWrapper">
              <img
                src={require("../../../public/img/2020/hero-iphones.png")}
                className="heroRightPhone"
                alt="Hero Right Phone"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
