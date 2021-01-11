import * as React from "react"
import { IParagraphComponent } from "../../../../interfaces/page-definitions.types"

const Paragraph = (props: IParagraphComponent) => {
  const { name, displayText, displayTextTwo, cssClasses, displayTextClasses, displayTextWrapperClasses, hasColumns } = props

  if (displayTextWrapperClasses) {

    return (
      <div id={`${name}-text-wrapper`} className={`flex flex-col lg:${hasColumns ? "flex-row" : "flex-col" }`}>
          <div className={displayTextWrapperClasses}>
            <p className={displayTextClasses}>{displayText}</p>
          </div>
        <div className={displayTextWrapperClasses}>
          <p className={displayTextClasses}>{displayTextTwo}</p>
        </div>
      </div>
    )
  }

  return (
    <div className="w-min-full">
      {displayText &&
          <p className={cssClasses}>
            {displayText}
          </p>
      }
    </div>
  )
}

export default Paragraph
