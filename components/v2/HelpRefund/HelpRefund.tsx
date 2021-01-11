import * as React from "react"
import "./HelpRefund.scss"


const HelpRefund = ({}) => {
  return (
    <div className="help-refund container">
      <img src={require("../../../public/img/v2/icons/refund.svg")} alt="refund icon"/>
      <p className="blue-text"> HELP</p>
      <p>We want everyone who uses Junket to be happy with their experience, 
        if you have any issues, <span><a href="/faq">check our FAQ</a></span> first, if that does not resolve your issue, 
        please <span><a href="/contact-us">contact us</a></span>. </p>
      {/* <p className="text-request-policy">See our refund request policy.</p> */}
    </div>
  )
}

export default HelpRefund 
