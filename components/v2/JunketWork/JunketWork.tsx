import * as React from "react"
import WorkContent from "./WorkContent/WorkContent"
import JunketExpImg from "./JunketExpImg/JunketExpImg"
import "./JunketWork.scss"

const experiences = {
  title: "Virtual Augmented Experiences",
  list: [
    "Find Junkets in the App, some are free or purchase tokens to start premium Junkets.",
    "Self guided tours activate Points of Interest as you near them.",
    "Navigate a suggested route and receive expert insight to fascinating history, culture and city life.",
    "You can skip, pause or detour from the route. Restart a Junket for up to seven days.",
    "Watch embedded, high quality videos showing you what people might not normally get to see. Audio lets you listen to the secrets of the city without the tourist look.",
    "Earn points from visiting locations to win prizes from vendors, groups or local organizations.",
    "See free and paid Junkets around you, or around the world in the Marketplace.",
    "Subscribe for access to all Junkets."
  ]
}

const adventure = {
  title: "Adventures",
  list: [
    "Make your adventure against the clock, against other teams or points based.",
    "Immerse yourself in a decision-based narrative world",
    "Unlock stops by answering questions, getting clues from walls, or real people.",
    "Join team based adventures, or solo challenges.",
    "Create your next company orientation in Junket.",
    "Make a Junket of your neighborhood, your family or friends, for fun or for money."
  ]
}

const JunketWork = ({}) => {
  return (
    <div className="junket-work container">
      <h3 className="grey-title">How Does Junket Work?</h3>
      <img className="sufering" src={require("../../../public/img/v2/sufering1.svg")} alt="dotted wavy path"/>
      <div className="how-work-top">
        <WorkContent className="vir-exp" data={experiences}/>
        <JunketExpImg imgName="exp-phone"/>
      </div>
      <div className="how-work-down">
        <JunketExpImg imgName="adventure-phone"/>
        <WorkContent className="adventure-exp" data={adventure}/>
      </div>
    </div>
  )
}

export default JunketWork 
