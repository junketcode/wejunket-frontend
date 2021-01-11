import React from "react"
import Apple from "./components/Apple"
import Google from "./components/Google"
import { IAppStoreButtonsComponent } from "../../../../interfaces/page-definitions.types"

const AppStoreButtons = ({ displayText }: IAppStoreButtonsComponent) => {
  return (
    <div>
      <h4 className="text-gray-800 text-lg md:text-2xl font-semibold m-4 xl:mt-12 xl:-mb-4">
        {displayText}
      </h4>
      <div className="flex flex-col lg:flex-row lg:justify-center">
        <Apple />
        <Google />
      </div>
    </div>
  )
}

export default AppStoreButtons
