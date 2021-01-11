import * as React from "react"

import GetInTouch from './GetInTouch'
import "./LoginAccount.scss"

const LoginAccount = () => {


  return (
    <div className="login-account container">
      <h3 className="grey-title">Login or create an account to pick a plan and start building!</h3>
      <div className="login-btn-group">
        <a href="#" className="signup">CREATE AN ACCOUNT</a>
        <a href="#" className="signin">LOG IN</a>
      </div>
      <GetInTouch />
    </div>
  )
}

export default LoginAccount
