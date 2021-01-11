import * as React from "react"
import AppStore from "../../2020/Social/AppStore/AppStore"
import "./DownloadApp.scss"

const DownloadApp = ({}) => {
  return (
    <div className="start-download-app container">
      <img className="left-phone" src={require("../../../public/img/v2/rotated-phone1.svg")} alt="rotated phone frame"/>
      <img className="vector-img" src={require("../../../public/img/v2/vector.svg")} alt="red vector shape"/>
      <img className="right-phone" src={require("../../../public/img/v2/rotated-phone2.svg")} alt="roated phone frame"/>
      <div className="download-center">
        <p className="txt-free-download" >Get the free app today, start exploring! </p>
        <div className="download-app" >
          <AppStore className="apple" />
          <AppStore className="google" />
        </div>
      </div>
    </div>
  )
}

export default DownloadApp 
