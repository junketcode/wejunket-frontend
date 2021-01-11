import * as React from "react"
import { IBubbleDivComponent } from "../../interfaces/page-definitions.types"

const BubbleDiv = ({ displayText, bubbleTitle, image, displayTextClasses }: IBubbleDivComponent) => {
  return (
    <div className="flex flex-col lg:flex-row mt-10 mb-10">
      <div className="flex justify-center align-middle w-screen lg:w-1/3">
        <img src={image.url} alt="bubble image"/>
      </div>
      <div className="w-screen lg:w-2/3 flex flex-col justify-center align-middle">
          <h1 className="text-4xl text-center">{bubbleTitle}</h1>
          <p className={displayTextClasses}>{displayText}</p>
      </div>
    </div>
  )
}

export default BubbleDiv
