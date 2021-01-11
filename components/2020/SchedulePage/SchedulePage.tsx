import React, {useState} from "react"
import "./SchedulePage.scss"
// import ReCAPTCHA from "react-google-recaptcha"

const SchedulePage = () => {
  const [disabled, setDisabled] = useState(true)

  const formHandler = (value) => {
    if(value) {
      setDisabled(false)
    }
  }

  return (
    <section id="schedule-consultation" className="schedulePageRoot">
      <div className="schedulePageContent">
        <div className="schedulePageLeft">
          <div className="schedulePageLeftTop">
            <h1 className="scheduleHeader">Contact Us</h1>
            <img className="sufering-contact" src={require("../../../public/img/v2/sufering1.svg")} alt="dotted wavy path"/>
            <p className="scheduleText">
              Do you have some questions and want to talk to one of our
              experts? Drop us a line below and we will get in touch. Junket
              has a wide range of applications and we think we would be the
              perfect fit for your project.
            </p>
          </div>
          <div className="schedulePageLeftBottom">
            <form
              className="scheduleForm"
              action="https://formspree.io/contact@wejunket.com"
              method="POST"
            >
              <div className="inputFifty">
                <label className="inputLabel">
                  First
                  <input
                    type="text"
                    name="first-name"
                    className="scheduleInputField"
                    placeholder="First Name"
                  />
                </label>
              </div>
              <div className="inputFifty">
                <label className="inputLabel">
                  Last
                  <input
                    type="text"
                    name="last-name"
                    className="scheduleInputField"
                    placeholder="Last Name"
                  />
                </label>
              </div>
              <div className="inputFifty">
                <label className="inputLabel">
                  Email
                  <input
                    type="email"
                    name="_replyto"
                    className="scheduleInputField"
                    placeholder="Email"
                  />
                </label>
              </div>
              <div className="inputFifty">
                <label className="inputLabel">
                  Company
                  <input
                    type="text"
                    name="company-name"
                    className="scheduleInputField"
                    placeholder="Company"
                  />
                </label>
              </div>
              <div className="inputFull">
                <label className="inputLabel">
                  Message
                  <textarea name="message" onChange={formHandler} className="scheduleMessage" placeholder="Message"/>
                </label>
                <input
                  type="submit"
                  value="Send"
                  className="scheduleSendButton"
                  disabled={disabled}
                />
              </div>
              {/*<div className="inputFull reCaptchaContainer">*/}
              {/*  <ReCAPTCHA*/}
              {/*    sitekey={"6Lc0BuYUAAAAAFRPmGhJOpH2gXxLfW8g74xEsKpF"}*/}
              {/*    onChange={reCaptchaHandler}*/}
              {/*  />*/}
              {/*</div>*/}
            </form>
          </div>
        </div>
        <div className="schedulePageRight">
          <img
            src={require("../../../public/img/v2/contact-us-phone.svg")}
            className="schedulePhone"
          />
        </div>
      </div>
    </section>
  )
}

export default SchedulePage
