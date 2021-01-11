import React from "react"
import Fade from 'react-reveal/Fade'
import "./WebinarWidget.scss"

const WebinarWidget = () => {
  return (
    <section id="webinar-widget" className="webinarRoot">
      {/* <div id="bigmarker-conference-widget-container82cb58cd73c3"/> */}
      <div className="webinar-container">
        <Fade left wait={2000}>
          <div className="webinar-left">
            <h2 className="title">Still have Questions?</h2>
            <p className="content">Join us on a Live Demo and Q&A to Learn more about Junket for Business</p>
          </div>
        </Fade>
        <Fade right delay={1000}>
          <div className="webinar-right">
            <img className="webinar-image" src={require("../../../public/img/webinar/webinar.png")} alt="webinar ad for junket"/>
            <a className="webinar-signup-btn" href="https://www.bigmarker.com/junket1/Create-Virtual-Experiences" target="blank">
              Register
            </a>
          </div>
        </Fade>
      </div>  
    </section>
  )
}

export default WebinarWidget
