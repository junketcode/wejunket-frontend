import React from "react"
import clsx from "clsx"

interface AppStoreProps{
  className?: String
} 

const AppStore = (props: AppStoreProps) => {
  const {className} = props

  if(className=="apple"){
    return (
      <a
        className={clsx(className)}
        href={"https://apps.apple.com/us/app/junket-explore-your-world/id1297242830"}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          alt="Download in the App Store"
          src={require("../../../../public/img/app-store/App_Store.png")}
        />
      </a>
    )
  }

  if(className=="google"){
    return (
      <a
        className={clsx(className)}
        href={"https://play.google.com/store/apps/details?id=com.junket.app"}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          alt="Get it on Google Play"
          src={require("../../../../public/img/app-store/google.png")}
        />
      </a>
    )
  }
  
}

export default AppStore
