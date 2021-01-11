import React from "react"
import "./Facebook.scss"

const Facebook = (props) => {
    const { white } = props
  return (
    <div className="facebookContainer">
      <img
        src={
          white
            ? require("../../../../public/img/2020/facebook-white.svg")
            : require("../../../../public/img/2020/facebook.svg")
        }
        alt="facebook"
        className="facebookIcon"
      />
    </div>
  )
}

export default Facebook
