import React from "react"
import "./Instagram.scss"

const Instagram = props => {
  const { white } = props
  return (
    <div className="instagramContainer">
      <img
        src={
          white
            ? require("../../../../public/img/2020/instagram-white.svg")
            : require("../../../../public/img/2020/instagram.svg")
        }
        alt="instagram"
        className="instagramIcon"
      />
    </div>
  )
}

export default Instagram
