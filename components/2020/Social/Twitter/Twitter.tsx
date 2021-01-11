import React from "react"
import "./twitter.scss"

const Twitter = props => {
  const { white } = props
  return (
    <div className="twitterContainer">
      <img
        src={
          white
            ? require("../../../../public/img/2020/twitter-white.svg")
            : require("../../../../public/img/2020/twitter.svg")
        }
        alt="twitter"
        className="twitterIcon"
      />
    </div>
  )
}

export default Twitter
