import * as React from "react"
import "./WhatIsJunketBanner.scss"



const WhatIsJunketBanner = () => {
  return (
    <div className="what-is-banner">
        <div className="banner-left">
            <h2 className="grey-title what-title">The Junket app transforms your surroundings into location-based adventure games and tours at your fingertips.</h2>
            <h3 className="blue-text">AVAILABLE TO ANYONE, ANYWHERE, ANYTIME!</h3>
            <img src={require("../../../public/img/v2/sufering1.svg")} alt=""/>
            <div className="banner-list">
                <ul>
                    <li key={1} className="banner-list-item">
                        <img src={require("../../../public/img/v2/icons/triangle-polygon.svg")} alt="triangle bullet list"/><p>Play decision based outdoor escape games in teams with your friends, or solo. Earn points and trophies for completing adventures the fastest.</p>
                    </li>
                    <li key={2} className="banner-list-item">
                        <img src={require("../../../public/img/v2/icons/triangle-polygon.svg")} alt="triangle bullet list"/><p>Compare your progress on the global leaderboard. <span>Adventures can be paired to your location outside your home - no need to travel!</span></p>
                    </li>
                    <li key={3} className="banner-list-item">
                        <img src={require("../../../public/img/v2/icons/triangle-polygon.svg")} alt="triangle bullet list"/><p>The perfect travel companion, Junket also turns your device into your personal, private tour guide, providing themed experiences featuring narration, directions, images, text, and video.</p>
                    </li>
                    <li key={4} className="banner-list-item">
                        <img src={require("../../../public/img/v2/icons/triangle-polygon.svg")} alt="triangle bullet list"/><p>Enjoy hundreds of experiences created by locals in over 50 cities. Location based or location free.</p>
                    </li>
                    <li key={5} className="banner-list-item">
                        <img src={require("../../../public/img/v2/icons/triangle-polygon.svg")} alt="triangle bullet list"/><p>Your tour, your way. With Junket, you'll never have to worry about rushing to make your tour time, bad weather, disruptive guests, sub-par tour guides, or sold out experiences.</p>
                    </li>
                    <li key={6} className="banner-list-item">
                        <img src={require("../../../public/img/v2/icons/triangle-polygon.svg")} alt="triangle bullet list"/><p>Take your experiences when you want, at your own pace and leisure, with whom you want, and where you want- Junkets are designed to be taken on location, but can be enjoyed from home! Junket is the perfect solution to augment your travel experience.</p>
                    </li>
                </ul>
            </div>
        </div>
        <div className="banner-right">
            <img className="what-is-phone" src={require(`../../../public/img/pages/whatisjunk/banner.png`)} alt="app screen demos"/>
        </div>
    </div>
  )
}

export default WhatIsJunketBanner 