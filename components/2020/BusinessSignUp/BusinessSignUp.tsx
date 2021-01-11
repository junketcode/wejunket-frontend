import React, { useEffect, useState } from "react"
import "./BusinessSignUp.scss"
import { AuthService, ISignUpData } from "../../../services/auth.service"
import { SessionStorageService } from "../../../services/sessionStorage.service"
import ReCAPTCHA from "react-google-recaptcha"
import { useRouter } from "next/router"
import YouTubePlayer from "react-player/lib/players/YouTube"
import FacebookLogin from "react-facebook-login"
import GoogleLogin from "react-google-login"
import environment from "../../../environment/environment"

const BusinessSignUp = () => {
  const regex = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/

  const [disabled, setDisabled] = useState(true)

  const [socialSignDisabled, setSocialSignDisabled] = useState(true)

  const [signedUp, setSignedUp] = useState(false)

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
    tos: false,
    recaptcha: false,
    role: "client",
  })

  const [formErrors, setFormErrors] = useState({
    email: [],
    password: [],
  })
  
  const router = useRouter();

  const recaptchaHandler = value => {
    if (value) {
      setFormData({ ...formData, recaptcha: true })
      if (formData.tos) {
        setDisabled(false)
      }
    }
  }

  const recaptchaHandlerWhenExpired = () => {
    setDisabled(true)
  }

  const handleTOS = (e, key) => {
    setFormData({ ...formData, [key]: e.target.checked });
    setSocialSignDisabled(!e.target.checked);
    setDisabled(!(e.target.checked && formData.recaptcha));
  }

  const formUpdateHandler = (event, key) => {
    setFormData({ ...formData, [key]: event.target.value })
    setFormErrors({ ...formErrors, [key]: [] })
  }

  const responseFacebook = async response => {
    if (response) {
      console.log(response)
      const responseData = await AuthService.signUpWithFacebook(
        response.id, response.accessToken, response.email, response.name
      )
      if (responseData.status === 200) {
        console.log(responseData.data)
        SessionStorageService.set("user", JSON.stringify(responseData.data))
        window.location.assign(environment.CMS_JUNKET_AUTO_LOGIN+responseData.data.token)
      }
    }
  }

  const responseGoogleSuccess = async response => {
    console.log("response")
    console.log(response)
    if (response) {
      const responseData = await AuthService.signUpWithGoogle(
        response.googleId,  response.accessToken, response.profileObj.email, response.profileObj.name
      )
      
      if (responseData.status === 200) {
        SessionStorageService.set("user", JSON.stringify(responseData.data))
        window.location.assign(environment.CMS_JUNKET_AUTO_LOGIN+responseData.data.token)
      }
    }
  }
  
  const responseGoogleFailure = response => {
    console.log(response)
  }

  const handleSignUpData = async (data: ISignUpData) => {
    const responseData = await AuthService.signUp(data)
    if (responseData) {
      if (responseData.status === 422) {
        setFormErrors({
          email: responseData.data.errors.email,
          password: responseData.data.errors.password,
        })
      } else if (responseData.status === 200) {
        console.log(responseData);
        SessionStorageService.set("user", JSON.stringify(responseData.data))
        SessionStorageService.set("alreadySignedUp", true)
        setSignedUp(true)
        router.push("/signup-confirm")
      }
    }
  }

  const onSubmit = e => {
    e.preventDefault()
    formData.name = formData.email
    handleSignUpData(formData)
  }

  const goToJunketAdventureIntro = e => {
    window.open("junket-adventure-intro")
  }

  const goToFAQ = e => {
    window.open("faq")
  }

  const goToPricing = e => {
    window.open("pricing")
  }

  useEffect(() => {
    if (SessionStorageService && SessionStorageService.get("alreadySignedUp")) {
      setSignedUp(true)
    } else {
      setSignedUp(false)
    }
  })

  return (
    <section id="business-signup" className="businessPageRoot">
      <div className="businessOverlay">
        <div className="businessPageContent">
          <div className="businessPageLeft">
            <div className="leftTitleContainer">
              {/* <img
                src={require("../../../public/img/logo/junket_color_12_21_17.png")}
                alt="junket-color-logo"
                className="junketLogoBusiness"
              /> */}
              <h1 className="forBusinessHeader">For Business</h1>
            </div>
            <div className="video-container">
              <div className="businessVideoContainer">
                <YouTubePlayer
                  url="https://youtu.be/PyoklUqTndg"
                  playing={false}
                  preload=""
                  width="100%"
                  height="100%"
                  className="react-player"
                  title="Junket for Business"
                />
              </div>
            </div>

            <div className="businessLeftMobile">
              <h1 className="businessLeftHeader">
                Create Your Own Digital Adventure
              </h1>
              <p className="businessPageText">
                Junket Turns Devices Into Tour Guides
              </p>
              <p className="businessPageText">
                Bring your experience into the 21st Century's App economy with
                the Junket platform
              </p>
              <ul className="featureList">
                <li>
                  <img
                    src={require("../../../public/img/2020/arrow-1.svg")}
                    className="listArrow"
                    alt="arrow"
                  />
                  <p className="businessPageText">
                    &nbsp;Create, manage, & deliver your content
                  </p>
                </li>
                <li>
                  <img
                    src={require("../../../public/img/2020/arrow-1.svg")}
                    className="listArrow"
                    alt="arrow"
                  />
                  <p className="businessPageText">
                    &nbsp;Generate revenue for your tours
                  </p>
                </li>
                <li>
                  <img
                    src={require("../../../public/img/2020/arrow-1.svg")}
                    className="listArrow"
                    alt="arrow"
                  />
                  <p className="businessPageText">
                    &nbsp;No maintenance, easy to use
                  </p>
                </li>
                <li>
                  <img
                    src={require("../../../public/img/2020/arrow-1.svg")}
                    className="listArrow"
                    alt="arrow"
                  />
                  <p className="businessPageText">
                    &nbsp;State of the art features
                  </p>
                </li>
              </ul>
              <p className="businessPageText">
                If you are not offering a virtual experience you are behind the
                curve, and missing out.
              </p>
              <ul className="featureList">
                <li>
                  <img
                    src={require("../../../public/img/2020/arrow-1.svg")}
                    className="listArrow"
                    alt="arrow"
                  />
                  <a
                    className="businessPageText"
                    onClick={goToJunketAdventureIntro}
                  >
                    &nbsp;How to create Adventure Junkets
                  </a>
                </li>
                <li>
                  <img
                    src={require("../../../public/img/2020/arrow-1.svg")}
                    className="listArrow"
                    alt="arrow"
                  />
                  <a className="businessPageText" onClick={goToFAQ}>
                    &nbsp;Frequently Asked Questions
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="businessPageRight">
            <div className="formContainer">
              <h1 className="signUpHeader">Sign-Up Now</h1>
              <p className="signUpText">Create and launch your Junket today!</p>
              <form className="signUpForm" onSubmit={onSubmit}>
                <div className="signUpInputFull">
                  <GoogleLogin
                    clientId={environment.GOOGLE_CLIENT_ID}
                    buttonText="Sign in with Google"
                    onSuccess={responseGoogleSuccess}
                    onFailure={responseGoogleFailure}
                    icon={true}
                    scope="profile email"
                    prompt="consent"
                    className="btn-google"
                    // disabled={socialSignDisabled}
                  />
                </div>
                <div className="signUpInputFull">
                  <FacebookLogin
                    appId={environment.FACEBOOK_APP_ID}
                    fields="name,email,picture"
                    callback={responseFacebook}
                    cssClass="btn-facebook"
                    icon="fa-facebook"
                    textButton="Sign in with Facebook"
                    // isDisabled={socialSignDisabled}
                  />
                </div> 
                <div className="or-text">
                  <p>Or</p>
                </div>
                <div className="signUpInputFifty">
                  <label className="signUpInputLabel">
                    Email
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      className="signUpInputField"
                      onChange={event => formUpdateHandler(event, "email")}
                      placeholder="Email"
                    />
                  </label>
                  {formErrors.email &&
                    formErrors.email.map((value, key) => (
                      <p className="errorMessage" key={"email" + key}>
                        {value}
                      </p>
                    ))}
                </div>
                <div className="signUpInputFifty">
                  <label className="signUpInputLabel">
                    Password
                    <input
                      type="password"
                      name="password"
                      value={formData.password}
                      className="signUpInputField"
                      onChange={event => formUpdateHandler(event, "password")}
                      placeholder="Password"
                    />
                  </label>
                  {formErrors.password &&
                    formErrors.password.map((value, key) => (
                      <p className="errorMessage" key={"password" + key}>
                        {value}
                      </p>
                    ))}
                </div>
                <div className="signUpInputFifty">
                  <label className="signUpInputLabel">
                    Confirm Password
                    <input
                      type="password"
                      name="confirm-password"
                      value={formData.password_confirmation}
                      className="signUpInputField"
                      onChange={event =>
                        formUpdateHandler(event, "password_confirmation")
                      }
                      placeholder="Confirm Password"
                    />
                  </label>
                </div>
                <div className="terms-of-service">
                  <label className="signUpInputLabel">
                    Agree to Terms of Service
                  <input
                    type="checkbox"
                    className="terms-of-service__checkbox"
                    onChange={e => handleTOS(e, "tos")}
                  />
                  </label>
                  <span>
                    I agree to{" "}
                    <a href="#" className="terms-of-service__text">
                      Junket's Terms of Service
                    </a>
                  </span>
                </div>
                <div className="signUpInputFull">
                    <div>
                      <div className="reCaptchaContainer">
                        <ReCAPTCHA
                          sitekey={"6Lc0BuYUAAAAAFRPmGhJOpH2gXxLfW8g74xEsKpF"}
                          onChange={recaptchaHandler}
                          onExpired={recaptchaHandlerWhenExpired}
                        />
                      </div>
                      <input
                        type="submit"
                        value="SIGN UP"
                        className="signUpSendButton"
                        disabled={disabled}
                      />
                      
                    </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BusinessSignUp
