import * as React from "react"
import OrgContent from "../OrgContent"
import BusinessPhone from "../../JunketWork/JunketExpImg/BusinessPhone"
import "./Destinations.scss"

const experiences = {
  list: [
    ["Expand your horizons, expand your opportunities.","Junket is continuously on, infinitely customizable, and a natural extension of your brand that complements your current offerings."],
    ["Junket works when you can’t, and where you don’t.", "Make your experiences available to people anywhere, anytime. Why should your market consist only of people who have to travel to you to engage with your brand or experience? Why should they be limited to specific days and hours of operation? They no longer have to, thanks to Junket."],
    ["Go global, Open 24/7/364.", "Customers want what they want, when they want it. Junket allows you to meet that demand. Never sell out from capacity or weather constraints, and stop losing customers. Extend your reach globally to engage new customers, and supplement your current product line. The set and forget management liberates you from the need to be there, be open, or to restrict capacity."],
    ["You set the price, and sell directly on your website.", "Earn revenue for each Junket sold. Junkets can be sold directly through your website using our booking widget and easily distributed, putting money in your pocket."],
    ["Games, Rewards and tie-ins.", "With GPS location triggered audio and video, a tour takes on new dimensions and becomes an adventure. Junket makes fun and engaging gamification and rewards easy.", "Integrate ‘choose your own adventure’ routes, clues and quizzes. Give prizes, partner rewards or tie-ins to promotions."],
    ["It’s easy to make Augmented Virtual Experiences that more visitors can take.", "Use existing content, or include new videos or audio. Location-based or location free, a perfect complement to face-to-face experiences. Everyone gets a customized experience with Junket. On their own schedule and their own terms.", "You’ll soon be able to generate revenue from your performances."],
    ["From one location, to any location; go global.", "Change your hours to anywhere, anytime. Increase revenue without physical restrictions. Break free of the limitations of physical tours and experiences, Junket can open up new markets."],
    ["Break the mold.", "Break out from your competition. Test new experiences, ideas, and alternatives easily. Add additional experiences to and experiment new ideas with minimal outlay and real-time testing. Create seasonally themed Junkets to stay fresh and new."],
  ]
}

const Destinations = ({}) => {
  return (
    <div className="destinations container">
      <p className="blue-text">For Organizations</p>
      <h3 className="grey-title">Destinations & Tours</h3>
      <img className="sufering" src={require("../../../../public/img/v2/sufering1.svg")} alt="dotted wavy path"/>
      <div className="dest-container">
        <div>
          <BusinessPhone imgName="destinations-phone"/>
          <h3>From Tour Operators:</h3>
          <div className="feedback-quote-left">
                <p className="green-text">“I am limited to three in-person tours a day. Now I see revenue come in when I’m away, asleep or not even there. And I know the product is good because I made it."</p>
                <div className="triangle shape1"></div>
          </div>
          <div className="feedback-quote-right">
                <p className="green-text">“We added in-depth history that we just don’t have time for on the tour, it really appeals to some guests, we give them a discount on our Junket if they ask a lot of questions.”</p>
                <div className="triangle shape1"></div>
          </div>
          <div className="feedback-quote-left">
                <p className="green-text">“We can see the routes people choose in Junket, what’s popular, what’s not. It’s so easy to change. The adventure aspects would not be possible in the real world, it’s a game-changer for us.”</p>
                <div className="triangle shape1"></div>
          </div>
        </div>  
        <OrgContent className="destination-content" data={experiences}/>
      </div>
    </div>
  )
}

export default Destinations