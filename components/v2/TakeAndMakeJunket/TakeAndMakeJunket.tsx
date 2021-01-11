import * as React from "react"
import "./TakeAndMakeJunket.scss"
import AppStoreGroup from '../AppStoreGroup/AppStoreGroup'

const TakeAndMakeJunket = () => {
  return (
    <div className="take-make-junket container">
      <div className="take-make">
        <div className="take-junket">
          <p className="title">Take a Junket</p>
          <p className="subtitle">Get the app, choose a Junket, dive in!</p>
          <p className="text-content">Select free Junkets, or preview Junkets available with tokens purchased in-app. </p>
        </div>

        <div className="make-junket">
          <p className="title">Make a Junket</p>
          <p className="subtitle">Ready to create your Junket? Sign up and get started.</p>
          <p className="text-content">Choose a plan, set your price and start earning. </p>
        </div>
      </div>
      <AppStoreGroup />
    </div>
  )
}

export default TakeAndMakeJunket 
