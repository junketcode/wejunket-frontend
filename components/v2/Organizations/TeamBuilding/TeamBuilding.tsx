import * as React from "react"
import OrgContent from "../OrgContent"
import BusinessPhone from "../../JunketWork/JunketExpImg/BusinessPhone"
import "./TeamBuilding.scss"

const experiences = {
  list: [
    ["Junket is additionally an easy platform to build and deliver next-level team building, orientation, incentive and onboarding experiences.","Break out of the normal, create team experiences that stand out, engage and delight. Challenge your teams to create connections, to a new place, or an old one.  Share the challenge of solving puzzles, unlocking secrets, and playing the game."],
    ["Make orientation a memorable experience.", "Guide participants to visit locations and get clues from people in your organization to progress. Reward speed, points or teams with prizes of your choosing."],
    ["Campus tours finally step beyond the map.", "Include questions about amenities, set clues with responses from professors or student ambassadors.", "Junket makes creativity your only limit in engaging new customers."]
  ]
}

const TeamBuilding = ({}) => {
  return (
    <div className="team container">
      <p className="blue-text">For Organizations</p>
      <h3 className="grey-title">Team Building, Onboarding, & Events</h3>
      <img className="sufering" src={require("../../../../public/img/v2/sufering1.svg")} alt="dotted wavy path"/>
      <div className="team-container">
        <div className="team-left">
          <OrgContent className="team-content" data={experiences}/>
          <div className="team-quote-container-desktop">
            <h3>From Our Business Customers:</h3>
            <div className="feedback-quote-left">
              <p className="green-text">“Feedback told us our orientation was not working, we tried Junket and found it super easy to add a simple treasure hunt around te neighbourhood. It brought a dull exercise to life."</p>
              <div className="triangle shape1"></div>
            </div>
            <div className="feedback-quote-right">
              <p className="green-text">“The conference social evening was getting stale, so we mixed it up with a Junket adventure tracing a fictional missing keynote speaker. The feedback was phenomenal.”</p>
              <div className="triangle shape1"></div>
            </div>
            <div className="feedback-quote-left">
              <p className="green-text">“We had our first gathering of our virtual team, we worked in a lot of the jokes from our video calls into the clues around our hotel, people are still talking about it. Really bonded us as a team.”</p>
              <div className="triangle shape1"></div>
            </div>
          </div>
        </div>
        <div className="team-right">
          <BusinessPhone imgName="business-team-phone"/>
          <div className="team-quote-container-mobile">
            <h3>From Our Business Customers:</h3>
            <div className="feedback-quote-left">
              <p className="green-text">“Feedback told us our orientation was not working, we tried Junket and found it super easy to add a simple treasure hunt around te neighbourhood. It brought a dull exercise to life."</p>
              <div className="triangle shape1"></div>
            </div>
            <div className="feedback-quote-right">
              <p className="green-text">“The conference social evening was getting stale, so we mixed it up with a Junket adventure tracing a fictional missing keynote speaker. The feedback was phenomenal.”</p>
              <div className="triangle shape1"></div>
            </div>
            <div className="feedback-quote-left">
              <p className="green-text">“We had our first gathering of our virtual team, we worked in a lot of the jokes from our video calls into the clues around our hotel, people are still talking about it. Really bonded us as a team.”</p>
              <div className="triangle shape1"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TeamBuilding