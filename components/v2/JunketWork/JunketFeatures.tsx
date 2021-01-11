import * as React from "react"
import FeaturesContent from "./WorkContent/FeaturesContent"
import BusinessPhone from "./JunketExpImg/BusinessPhone"
import "./JunketFeatures.scss"

const experiences = {
  title: "Virtual Augmented Experiences",
  list: [
    "Location triggered mapping based on device GPS.",
    "Create your own sequential routes of multiple stops from start to finish.",
    "Easily embed audio, video, images, or text for each stop.",
    "Add location trigger zones, from 10m up to 50m.",
    "Auto-created or manual visual navigation routes for users.",
    "Include links to websites and phone numbers",
    "Junkets can be activated from anywhere.",
    "Set your own price for Junkets, or make them free.",
    "See analytics and sales reports.",
    "Accepts multiple currencies.",
    "Your public Junkets appear in the Junket Marketplace.",
    "Business level users, and above, can embed their Junkets in websites and Facebook."
  ]
}

const adventure = {
  title: "Adventures",
  list: [
    "Start and end at single points.",
    "Add multiple choice decision stops to create a narrative journey.",
    "Require a specific response to a question to unlock the next stop.",
    "Participants can compete against the clock, leaderboard, or points.",
    "Place trophies and attach time-limited prizes."
  ]
}

const JunketFeatures = ({}) => {
  return (
    <div className="junket-features container">
      <h3 className="grey-title">Junket Features</h3>
      <img className="sufering" src={require("../../../public/img/v2/sufering1.svg")} alt="dotted wavy path"/>
      <div className="features-top">
        <FeaturesContent className="vir-exp" data={experiences}/>
        <BusinessPhone imgName="business-vae-phone"/>
      </div>
      <div className="features-down">
        <BusinessPhone imgName="business-adv-phone"/>
        <FeaturesContent className="adventure-exp" data={adventure}/>
      </div>
    </div>
  )
}

export default JunketFeatures