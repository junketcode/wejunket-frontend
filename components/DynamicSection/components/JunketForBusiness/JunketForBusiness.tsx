import React from "react"
import { IDynamicSectionDefinition } from "../../../../interfaces/page-definitions.types"
import DynamicComponent from "../../../DynamicComponent/DynamicComponent"
import environment from "../../../../environment/environment";

const JunketForBusiness = ({
  sectionName,
  sectionBackground,
  components,
}: IDynamicSectionDefinition) => {
  const graphicPath = "img/graphics/compass.png"
  const baseURL = [`${environment.CMS_API_BASE}`, sectionBackground.url]

  const style =
    sectionBackground && sectionBackground.url
      ? {
          backgroundImage: `url(${baseURL.join('')})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }
      : {}

  return (
    <section
      id={sectionName}
      style={style}
      className="w-full flex bg-cover md:min-h-screen flex-row bg-fixed px-8 py-10 -mt-6 font-sans"
    >
      <div className="w-1/1 lg:w-1/2">
        <div className="lg:w-2/3 lg:mt-10 lg:ml-10">
          {components &&
            components.map(component => (
              <DynamicComponent key={component.name} {...(component as any)} />
            ))}
        </div>
      </div>
    </section>
  )
}

export default JunketForBusiness
