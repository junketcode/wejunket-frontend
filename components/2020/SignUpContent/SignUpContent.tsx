import React, {useEffect, useState} from "react"
import "./SignUpContent.scss"
import GoogleLogin from "react-google-login"
import environment from "../../../environment/environment"
import FacebookLogin from "react-facebook-login"
import ReCAPTCHA from "react-google-recaptcha"
import Link from "next/link"
import { AuthService, ISignUpData } from "../../../services/auth.service"
import { SessionStorageService } from "../../../services/sessionStorage.service"
import {PriceSetterUtil} from "../../../utils/price-setter.util"
import {SubscriptionService} from "../../../services/subscription.service";

const SignUpContent = ({monthly, yearly, planName}) => {
  const [paymentClasses, setPaymentClasses] = useState([
    "paymentSelectionContainer",
    "out",
  ])

  const [plan, setPlan] = useState(undefined)

  let monthlyPrice = PriceSetterUtil.setMonthly(monthly);

  let yearlyPrice = PriceSetterUtil.setYearly(yearly);

  let yearlyTotal = PriceSetterUtil.setYearlyTotal(yearly);

  const [disabled, setDisabled] = useState(true)

  const [signedUp, setSignedUp] = useState(false)

  const [checkedPlan, setCheckedPlan] = useState(false)

  const handlePlanSelection = (planSelected) => {
    setPlan(planSelected)
  }

  useEffect(() => {
    if(!monthly && !yearly) {
      setPaymentClasses(prevState => ["paymentSelectionContainer", "in"])
      setSignUpClasses(prevState => ["signUpContainer", "in"])
      setPlan(undefined)
    }
  }, [checkedPlan])

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
    setFormData({ ...formData, [key]: e.target.checked })
    if (e.target.checked && formData.recaptcha) {
      setDisabled(false)
    }
  }

  const formUpdateHandler = (event, key) => {
    setFormData({ ...formData, [key]: event.target.value })
    setFormErrors({ ...formErrors, [key]: [] })
  }

  const responseFacebook = async response => {
    if (response) {
      const responseData = await AuthService.signUpWithFacebook(
        response.id, response.accessToken, response.email, response.name
      )
      if (responseData.status === 200) {
        SessionStorageService.set("user", JSON.stringify(responseData.data))
        window.location.assign(environment.CMS_JUNKET_AUTO_LOGIN+responseData.data.token)
      }
    }
  }

  const responseGoogleSuccess = async response => {
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

  const handleSignUpData = async (data: ISignUpData, plan:string, planName:string) => {
    const responseData = await AuthService.signUp(data)
    if (responseData) {
      if (responseData.status === 422) {
        setFormErrors({
          email: responseData.data.errors.email,
          password: responseData.data.errors.password,
        })
      } else if (responseData.status === 200) {
        SessionStorageService.set("user", JSON.stringify(responseData.data))
        SessionStorageService.set("alreadySignedUp", true)
        setSignedUp(true)
        if(plan != undefined) {
          const response = await SubscriptionService.subscribeToProductPlan(plan, planName)
          console.log(response)
        }
      }
    }
  }

  const onSubmit = (e, plan, planName) => {
    e.preventDefault()
    formData.name = formData.email
    handleSignUpData(formData, plan, planName)
  }

  const [signUpClasses, setSignUpClasses] = useState(["signUpContainer", "out"])

  const handleInToggle = (selectedPlan) => {
    setPaymentClasses(prevState => ["paymentSelectionContainer", "in"])
    setSignUpClasses(prevState => ["signUpContainer", "in"])
    setPlan(selectedPlan)
    console.log(selectedPlan)
  }

  const handleOutToggle = () => {
    setPaymentClasses(prevState => ["paymentSelectionContainer", "out"])
    setSignUpClasses(prevState => ["signUpContainer", "out"])
  }

  return (
    <section id="sign-up" className="signUpRoot">
      <div className={paymentClasses.join(" ")}>
        <img
          src={require("../../../public/img/logo/junket_color_12_21_17.png")}
          className="logo"
        />
        <h1 className="planHeader">Choose the plan that works for you:</h1>
        <div className="planContainer">
          <div className="paymentSelectionCard">
            <img
              src={require("../../../public/favicon.png")}
              className="icon"
            />
            <h1 className="planTitle">Monthly</h1>
            <h2>{monthlyPrice}</h2>
            <div className="divider" />
            <ul className="featureList">
              <li>Billed Monthly</li>
            </ul>
            <button className="choosePlan" onClick={() => handleInToggle(monthly)}>
              Choose Plan
            </button>
          </div>
          <div className="paymentSelectionCard">
            <img
              src={require("../../../public/favicon.png")}
              className="icon"
            />
            <h1 className="planTitle">Yearly</h1>
            <h2>{yearlyPrice}</h2>
            <div className="divider" />
            <ul className="featureList">
              <li>Billed Yearly at {yearlyTotal}/year</li>
            </ul>
              <button className="choosePlan" onClick={() => handleInToggle(yearly)}>
                Choose Plan
              </button>
          </div>
        </div>
        <Link href={{ pathname: "pricing" }}>
        <button className="backToPricingPlan">Back to the Pricing Page</button>
        </Link>
      </div>
      <div className={signUpClasses.join(" ")}>
        <div className="formContainerContent">
          <div className="signUpFormContent">
            <button onClick={handleOutToggle} className="backToTopButton">
              Back to Payment Terms
            </button>
          </div>
          <form className="signUpFormContent" onSubmit={(e) => onSubmit(e, plan, planName)}>
            <div className="signUpInputFullContent">
              <GoogleLogin
                clientId={environment.GOOGLE_CLIENT_ID}
                buttonText="Sign in with Google"
                onSuccess={responseGoogleSuccess}
                onFailure={responseGoogleFailure}
                icon={true}
                scope="profile email"
                prompt="consent"
                className="btn-google"
                disabled={disabled}
              />
            </div>
            <div className="signUpInputFullContent">
              <FacebookLogin
                appId={environment.FACEBOOK_APP_ID}
                fields="name,email,picture"
                callback={responseFacebook}
                cssClass="btn-facebook"
                icon="fa-facebook"
                textButton="Sign in with Facebook"
                isDisabled={disabled}
              />
            </div>
            <div className="or-text">
              <p>Or</p>
            </div>
            <div className="signUpInputFiftyContent">
              <label className="signUpInputLabelContent">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  className="signUpInputFieldContent"
                  onChange={event => formUpdateHandler(event, "email")}
                  placeholder="Email"
                />
              </label>
              {formErrors.email &&
                formErrors.email.map((value, key) => (
                  <p className="errorMessageContent" key={"email" + key}>
                    {value}
                  </p>
                ))}
            </div>
            <div className="signUpInputFiftyContent">
              <label className="signUpInputLabelContent">
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  className="signUpInputFieldContent"
                  onChange={event => formUpdateHandler(event, "password")}
                  placeholder="Password"
                />
              </label>
              {formErrors.password &&
                formErrors.password.map((value, key) => (
                  <p className="errorMessageContent" key={"password" + key}>
                    {value}
                  </p>
                ))}
            </div>
            <div className="signUpInputFiftyContent">
              <label className="signUpInputLabelContent">
                <input
                  type="password"
                  name="confirm-password"
                  value={formData.password_confirmation}
                  className="signUpInputFieldContent"
                  onChange={event =>
                    formUpdateHandler(event, "password_confirmation")
                  }
                  placeholder="Confirm Password"
                />
              </label>
            </div>
            <div className="terms-of-service">
              <input
                type="checkbox"
                className="terms-of-service__checkbox"
                onChange={e => handleTOS(e, "tos")}
              />
              <span>
                I agree to{" "}
                <a href="#" className="terms-of-service__text">
                  Junket's Terms of Service
                </a>
              </span>
            </div>
            <div className="signUpInputFullContent">
              <div>
                <input
                  type="submit"
                  value="Sign Up!"
                  className="signUpSendButtonContent"
                  disabled={disabled}
                />
                <div className="reCaptchaContainerContent">
                  <ReCAPTCHA
                    sitekey={"6Lc0BuYUAAAAAFRPmGhJOpH2gXxLfW8g74xEsKpF"}
                    onChange={recaptchaHandler}
                    onExpired={recaptchaHandlerWhenExpired}
                  />
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default SignUpContent
