import * as React from "react"
import "./AdventurePocket.scss"

const AdventurePocket = ({}) => {
  return (
    <div className="adventure-pocket container">
      <h3 className="grey-title">Adventures in Your Pocket</h3>
      <img className="sufering" src={require("../../../public/img/v2/sufering1.svg")} alt="dotted wavy path"/>
      <p className="adventure-explain">Adventures are interactive, decision based games that immerse you in a narrative storyline, a race to the top, a race against the clock or a race against another team!  </p>
      
      <div className="pocket-container">
        <div className="content-left">
          <p>GPS triggered real life adventures on any theme you can imagine. </p>
          <p>It’s an escape room over the whole city. In teams, alone or socially distanced! </p>
          <p>Trivia hunts, conference activities and destination based adventures. Complete challenges, compete against one another, build teams and welcome new hires. </p>
          <p>Competitive scavenger hunts, with leaderboards, trophies and prizes. </p>
        </div>
        <div>
          <img src={require("../../../public/img/v2/phone-frame1.svg")} alt="blank phone screen placeholder"/>
        </div>
        <div className="content-right">
          <p>Create your own employee adventure to invigorate your teams, you create the adventure, all fun, or all work, or something in between. </p>
          <p>Engage employees with themed adventures around your building, neighborhood or city. Make getting to know your organization a memorable experience. </p>
          <p>Raise your corporate incentive trip with a themed VIP adventure ending at a surprise event.  </p>
        </div>
      </div>

      <div className="star-feature">
        <div>
          <img src={require("../../../public/img/v2/icons/star.svg")} alt="star icon"/>
          <p className="red-text">Turn your retreat into a puzzle to beat. </p>
        </div>
        <div>
          <img src={require("../../../public/img/v2/icons/star.svg")} alt="star icon"/>
          <p className="red-text">Answer trivia about your company to find the dinner location! </p>
        </div>
        <div>
          <img src={require("../../../public/img/v2/icons/star.svg")} alt="star icon"/>
          <p className="red-text">Turn onboarding into a memorable adventure. </p>
        </div>
      </div>

      <div className="star-feature">
        <div>
          <img src={require("../../../public/img/v2/icons/star.svg")} alt="star icon"/>
          <p className="red-text">Build your team with a challenge across the city. </p>
        </div>
        <div>
          <img src={require("../../../public/img/v2/icons/star.svg")} alt="star icon"/>
          <p className="red-text">Gather secret word clues from landmarks or live people. </p>
        </div>
        <div>
          <img src={require("../../../public/img/v2/icons/star.svg")} alt="star icon"/>
          <p className="red-text">Make your christmas party a scavenger hunt voiced by your boss. </p>
        </div>
        <div>
          <img src={require("../../../public/img/v2/icons/star.svg")} alt="star icon"/>
          <p className="red-text">Set teams against each other in a trivia quiz for prizes. </p>
        </div>

      </div>
    </div>
  )
}

export default AdventurePocket 
