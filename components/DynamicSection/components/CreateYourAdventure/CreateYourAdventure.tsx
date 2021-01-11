import React from "react"
import { IDynamicSectionDefinition } from "../../../../interfaces/page-definitions.types"
import DynamicComponent from "../../../DynamicComponent/DynamicComponent"
import environment from "../../../../environment/environment"

const CreateYourAdventure = ({
  sectionName,
  sectionBackground,
  components,
}: IDynamicSectionDefinition) => {
  const baseURL = [`${environment.CMS_API_BASE}`, sectionBackground.url]
  const style =
    sectionBackground && sectionBackground.url
      ? {
          backgroundImage: `url(${baseURL.join("")})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: 400,
        }
      : {}

  return (
    <section id={sectionName} style={style}>
      <div className="p-10 w-full">
        {components &&
          components.map(component => (
            <DynamicComponent key={component.name} {...(component as any)} />
          ))}
      </div>
    </section>
  )
}

export default CreateYourAdventure
