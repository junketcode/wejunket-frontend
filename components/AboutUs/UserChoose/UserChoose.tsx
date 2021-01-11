import * as React from "react"
import AppStore from "../../2020/Social/AppStore/AppStore"
import "./UserChoose.scss"

const UserChoose = ({}) => {
  return (
    <div className="user-choose-app container">
      <img className="vector-img" src={require("../../../public/img/v2/vector.svg")} alt="red vector shape"/>
      <div className="download-center">
        <p className="userchoose-txt" >
          Users choose their own immersive adventures from hundreds in the Junket marketplace and walk alongside expert narrators, watch immersive videos, unlock prizes, and most importantly, have fun! 
        </p>
      </div>
    </div>
  )
}

export default UserChoose 
