import * as React from "react"
import "./PersonalUse.scss"

const PersonalUse = ({}) => {
  return (
    <div className="personal-use container">
      <h3 className="grey-title">Junket for Personal Use</h3>
      <img className="sufering" src={require("../../../public/img/v2/sufering1.svg")} alt="dotted wavy path"/>
      
      <div className="personal-container">
        <div className="content-left">
          <p>Junket lets you invite guests on a journey of your creation. </p>
          <p>Birthdays, family reunions, anniversaries. Junket is for any event where you want to make new memories for a special group. </p>
        </div>
        <div className="personal-quote-container">
          <img className="personal-rectangle" alt="rectangle" src={require("../../../public/img/v2/rectangle-personal-use.svg")}></img>
          <div className="feedback-quote">
              <p className="green-text">“Grandad grew up in Brooklyn, we talked to him about places from his youth. For his birthday all the families did the Junket I made, they got souvenirs and brought them back to him, he just lit up talking to us all about his childhood candy store”</p>
              <div className="triangle shape2"></div>
          </div>
        </div>
        <div className="content-right">
          <p>Build a scavenger hunt, include quizzes, award prizes. Add video, audio and images. </p>
          <p>Share your take on your community, neighborhood or city. Or even imagine a new history for an existing city. Layer audio, video, images, text on a structured or diverging route. </p>
        </div>
      </div>
    </div>
  )
}

export default PersonalUse
