import * as React from "react"
import "./AppStoreGroup.scss"
import AppStore from "../../2020/Social/AppStore/AppStore"

const AppStoreGroup = ({}) => {
  return (
    <div className="app-store-group">
      <AppStore className="apple" />
      <AppStore className="google" />
    </div>
  )
}

export default AppStoreGroup 
