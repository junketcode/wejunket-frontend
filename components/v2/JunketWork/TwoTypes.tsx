import * as React from "react"
import FeaturesContent from "./WorkContent/FeaturesContent"
import BusinessPhone from "./JunketExpImg/BusinessPhone"
import "./TwoTypes.scss"

const experiences = {
  title: "Virtual Augmented Experiences",
  list: [
    "Tours at your fingertips! Walk alongside expert narrators at your pace, skip ahead or dive deeper through video, audio, and images triggered by GPS.",
    "Experience ghost tours across the world. Go behind the scenes on movie and TV locations. Take literature, food and gourmet tours. Get insider info from brewing and distilling experts.",
    "Reveal the layers behind your city, or a city across the world. Earn points by visiting locations and win prizes from vendors, groups or local organizations.",
    "See free and paid Junkets around you, or around the world in the Marketplace. Enjoy hundreds of experiences created by locals in over 50 cities. Location based or location free.",
    "Junket Virtual Augmented Experiences give you the tour you want in the way you want."
  ]
}

const adventure = {
  title: "Adventure Junkets",
  list: [
    "Adventures are tagged in the marketplace and are a little bit different! From the same starting location you will first see a clue, then you must make a decision to reveal your next steps. It’s a real world, choose your own adventure, escape room fun fest!",
    "Decisions may be multiple choice or fill in the blank (for example, enter the codeword given by the hotel concierge, or write the numbers etched into a brick on the wall).",
    "Once you make a decision, the route to your next challenge is revealed!",
    "Everyone has the same start and ending, see who gets there first.",
    "Once you reach the end, you will be shown your points and trophy, if you earned one. See if your Trophy can be redeemed for real world prizes!"
  ]
}

const TwoTypes = ({}) => {
  return (
    <div className="two-types-container">
      <h3 className="grey-title">Junkets come in two types</h3>
      <img className="sufering" src={require("../../../public/img/v2/sufering1.svg")} alt="dotted wavy path"/>
      <div className="two-types-top">
        <FeaturesContent className="vir-exp" data={experiences}/>
        <BusinessPhone imgName="twotypes1" fromWhat/>
      </div>
      <div className="two-types-down">
        <BusinessPhone imgName="twotypes2" fromWhat/>
        <FeaturesContent className="adventure-exp" data={adventure}/>
      </div>
    </div>
  )
}

export default TwoTypes 