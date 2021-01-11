import * as React from "react"
import { ISectionTitleComponent } from "../../../../interfaces/page-definitions.types"

const SectionTitle = ({ displayText, cssClasses }: ISectionTitleComponent) => {
  return (
    <h2
      className={
        cssClasses || "text-center text-white text-4xl tracking-widest -mt-5"
      }
    >
      {displayText}
    </h2>
  )
}

export default SectionTitle
