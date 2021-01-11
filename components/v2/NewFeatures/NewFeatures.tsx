import * as React from "react"
import "./NewFeatures.scss"

const NewFeatures = ({}) => {
  return (
    <div className="new-features container">
      <h3 className="grey-title">New Features Arriving Soon</h3>
      <img className="sufering" src={require("../../../public/img/v2/sufering1.svg")} alt="dotted wavy path"/>
      <div className="top-features">
        <div className="adv-anywhere">
          <p className="title">Adventures Anywhere</p>
          <p className="text-content">Embark on adventures around the world from anywhere you want. Feel like a Ghost tour of New York? Go for it. Immersive media takes you there, from wherever you are.</p>
        </div>

        <div className="phone-sync">
          <p className="title">Phone Sync</p>
          <p className="text-content">Junket will soon be a social experience, you can sync your Junket with other phones for a shared live experience!</p>
          <p className="text-content">People in a group can listen to the same Junket at the same time and take the experience together.</p>
        </div>
      </div>
      <div className="junket-live">
          <p className="title">Junket Live</p>
          <p className="live-text-content">Share your performances with a paying audience. Reenactments, stagings, special performances.</p>
          <p className="live-text-content">Extend your Junkets with shows that only happen in one place.</p>
          <p className="live-text-content">Offer live or recorded experiences. Expand your audience, regardless of location, record special events for future visitors. Coming July 2020.</p>
        </div>
    </div>
  )
}

export default NewFeatures 
