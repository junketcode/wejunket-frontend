import React from "react"
import { IDynamicSectionDefinition } from "../../../../interfaces/page-definitions.types"
import DynamicComponent from "../../../DynamicComponent/DynamicComponent"

const GenericSection = (props: IDynamicSectionDefinition) => {
  const { sectionName, sectionTitle, components, sectionBackground } = props
  const style = {
    backgroundImage: `url('${sectionBackground.url || ""}')`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  }

  return (
    <section
      id={sectionName}
      style={style}
      className="flex bg-local min-h-screen px-8 py-10 pt-24 content-center"
    >
      <div className="p-10 w-full">
        <h1 className="text-white font-sans text-3xl text-center">
          {sectionTitle}
        </h1>
        <div className="flex flex-col lg:flex-row">
          {components.map(component => (
            <DynamicComponent key={component.name} {...component} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default GenericSection
