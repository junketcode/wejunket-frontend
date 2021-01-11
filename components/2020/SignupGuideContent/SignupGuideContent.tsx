import React from "react"
import "./SignupGuideContent.scss"
import Link from "next/link"
const TermsConditionsContent = () => {
  return (
    <section id="signupGuide">
      <div className="header-section">
        <div className="header-section__left">
          <div className="header-section__left-img">
            <img
              src={require("../../../public/img/logo/junket_color_12_21_17.png")}
            />
          </div>
          <p className="header-section__left-first-title">
            Junket Turns Your Phone Into a Tour Guide
          </p>
          <p className="header-section__left-second-title">
            Get with 2020 and take your experience digital
          </p>
          <p className="header-section__left-third-title">
            Just because the world shuts down, doesn’t mean your 
            business has to!
          </p>
          <div className="header-section__left-bar">
            <p>
              30 DAYS FREE! 
            </p>
            <p>
              SIGN UP NOW: wejunket.com/business
            </p>
          </div>
          <div className="header-section__left-btns">
              <a
                className="w-1/2 md:w-auto md:h-16"
                href="http://play.google.com/store/?pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1"
              >
                <img
                  className="h-20 lg:h-full lg:p-0"
                  alt="Get it on Google Play"
                  src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
                />
              </a>
              <a
                className="w-1/2 md:w-auto md:h-16"
                href="https://apps.apple.com/us/app/junket-explore-your-world/id1297242830"
              >
                <img
                  className="h-full p-3"
                  alt="Download in the App Store"
                  src='https://junket-strapi-cms-images.s3.amazonaws.com/eab3752043cc4cd483483899df8a2308.svg'
                />
              </a>
          </div>
          <div>
            <p>
              <img
                src={require("../../../public/img/2020/arrow-1.svg")}
              />Create and test your Junkets
            </p>
            <p>
              <img
                src={require("../../../public/img/2020/arrow-1.svg")}
              />Earn revenue 
            </p>
            <p>
              <img
                src={require("../../../public/img/2020/arrow-1.svg")}
              />Native iOS and Android mobile apps
            </p>
          </div>
        </div>
        <div className="header-section__right">
          <img
            src={require("../../../public/img/2020/signup_phone_guide1.png")}
          />
        </div>
      </div>
      <img
        src={require("../../../public/img/logo/junket_color_12_21_17.png")}
        className="headerLogo"
      />

    </section>
  )
}

export default TermsConditionsContent
