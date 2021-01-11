import * as React from "react"
import WhatJunkCanDoDetail from './WhatJunkCanDoDetail'
import AppStoreGroup from '../../v2/AppStoreGroup/AppStoreGroup'
import "./WhatJunkCanDo.scss"

const WhatJunkCanDo = ({}) => {


  return (
    <div className="what-junket-can-do container">
      <h3 className="grey-title">What can Junket do for you?</h3>
      <img className="sufering" src={require("../../../public/img/v2/sufering1.svg")} alt="dotted wavy path"/>
      <p className="history-explain">If you are looking to take a Virtual Enhanced Experience, get the app, explore the marketplace to find free Junkets, or purchase tokens to enjoy premium Junkets. While Junkets can be taken on location, or remotely, adventures require you to get out into the real world to experience it!</p>
      <WhatJunkCanDoDetail />
      <AppStoreGroup />
    </div>
  )
}

export default WhatJunkCanDo 
