import React from "react"
import "./SignUpConfirmMessage.scss"
import { useRouter } from "next/router"

const SignUpConfirmMessage = () => {
  
  const router = useRouter();

  return (
    <section className="signup-confirm">
      <div className="confirm-box"> 
          <h2 className="title"> Almost done !</h2>
          <p className="content">
            Thanks for signing up! - Please check your email to
            confirm your email address.
          </p>
          <button className="go-back" onClick={ ()=>router.push("/business")} > Go Back </button>
      </div>
    </section>
  )
}

export default SignUpConfirmMessage
