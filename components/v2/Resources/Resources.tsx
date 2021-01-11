import * as React from "react"
import "./Resources.scss"

const Resources = ({}) => {
  return (
    <div className="signup-container container">
      {/* <div className="signup-content">
        <img src={require("../../../public/img/v2/icons/arrow-btn.svg")} alt="arrow button"/>
        <p className="red-text">SIGN UP NOW</p>
        <p>Create and launch you Junket today!</p>
      </div> */}
      <div className="resources-container">
        <div className="resources-left">
            <div className="resources">
                <p className="title">RESOURCES</p>
                <p className="subtitle">Already have an App?</p>
                <p className="text-content">Our software easily integrates with existing mobile applications so that you can add Junket capability and features to the app you already have!</p>
                <p className="subtitle">How to Make Your First Adventure</p>
                <p className="text-content">A step by step guide to walk you through making your first adventure.</p>
            </div>
        </div>
        <div className="resources-right">
          <div className="resources-right-top">
              <div className="webinars">
                  <p className="title">Webinars</p>
                  <p className="text-content">If you have more questions we would love for you to join us on a Live Demo and Q&A to learn more about Junket for Business.</p>
              </div>
          </div>
          <div className="resources-right-bottom">
              <div className="faq">
                  <p className="title">FAQ</p>
                  <p className="text-content">All the answers you need.</p>
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Resources 