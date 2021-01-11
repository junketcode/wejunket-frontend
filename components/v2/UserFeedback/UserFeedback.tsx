import * as React from "react"
import "./UserFeedback.scss"

const UserFeedback = ({}) => {
  return (
    <div className="user-feedback container">
      <h3 className="grey-title">What Junket Users are Saying</h3>
      <img className="sufering" src={require("../../../public/img/v2/sufering1.svg")} alt="dotted wavy path"/>
      <p className="feedback-explain">In a team, with a group, or on you own. For fun, for the win, or just the joy of discovery. Junkets let you discover the world on your terms. </p>
      
      <div className="feedback-list">
        <div className="feedback-item">
          <div className="feedback-quote">
            <p className="blue-text">“We saw Colonial Williamsburg over four days, imagine a tour guide doing that!”</p>
            <div className="triangle shape1"></div>
          </div>
          <div className="feedback-ads">
            <p>See the best of Colonial Williamsburg, all on your schedule. Follow a route, or just wander. You’ll be able to hear and see the stories over 100 locations.</p>
          </div>
          
        </div>

        <div className="feedback-item">
          <div className="feedback-quote">
            <p className="blue-text">“We only had the morning in the city, no ghost tours were open, so we used Junket to do parts of two tours, we were done by midday”</p>
            <div className="triangle shape2"></div>
          </div>
          <div className="feedback-ads">
            <p>Feel like a ghost tour first thing in the morning, no problem! Pick a city, New York, Key West or anywhere in the Junket Marketplace</p>
          </div>
          
        </div>
        
        <div className="feedback-item">
          <div className="feedback-quote">
            <p className="blue-text">“My company team-building event had my team solving puzzles around our campus in places I’d never been before, who knew there was a costume shop here?”</p>
            <div className="triangle shape3"></div>
          </div>
          <div className="feedback-ads">
            <p>Orientation taken to a whole new level. Build scavenger hunts, quizzes and tours for any group, or the public. Give prizes, or compete against the clock. Make it a day to remember!</p>
          </div>
          
        </div>
      </div>

    </div>
  )
}

export default UserFeedback 
