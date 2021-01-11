import * as React from "react"
import WorkContent from "./WorkContent/WorkContent"
import JunketExpImg from "./JunketExpImg/JunketExpImg"
import './JunketDescription.scss'

const detail = {
  detail: "Junket is a web-based platform for creating, distributing, and monetizing Augmented Virtual Experiences (AVEs). Born out of virtual guided tours the platform is now used to add fun and adventure to location-based, or location-free experiences by:",
  list: [
    "Destination Marketing Organizations",
    "Convention & Visitor Bureaus",
    "Real Estate Companies",
    "National Parks",
    "Historic Attractions",
    "Schools",
    "Cities",
    "Bar Crawls",
    "Zoos",
    "Museums",
  ]
}

const JunketDescription = () => {
  return (
    <div className="junket-description container">
      <div className="how-work-down">
        <JunketExpImg imgName="adventure-phone"/>
        <WorkContent className="adventure-exp" data={detail}/>
      </div>
    </div>
  )
}

export default JunketDescription 
