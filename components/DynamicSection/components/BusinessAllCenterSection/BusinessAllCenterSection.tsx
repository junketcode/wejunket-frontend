import React from "react"
import { IDynamicSectionDefinition } from "../../../../interfaces/page-definitions.types"
import DynamicComponent from "../../../DynamicComponent/DynamicComponent"
import environment from "../../../../environment/environment";

const BusinessCenterAllSection = ({
  sectionName,
  sectionBackground,
  components,
}: IDynamicSectionDefinition) => {
  const graphicPath = "img/graphics/map-marker.png"
  const baseURL = [`${environment.CMS_API_BASE}`, sectionBackground.url]
  const style =
    sectionBackground && sectionBackground.url
      ? {
          backgroundImage: `url(${baseURL.join("")})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: 650,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }
      : {}
  return (
    <section id={sectionName} style={style} className="flex-col max-w-full lg:flex-row">
      <div className="flex justify-center align-middle w-full lg:w-1/4">
        <img src={graphicPath} className="m-auto" alt="Compass"/>
      </div>
      <div className="w-full flex flex-col lg:w-1/2">
        {components &&
          components.map(component => (
            <DynamicComponent key={component.name} {...(component as any)} />
          ))}
      </div>
      <div className="flex justify-center align-middle w-full lg:w-1/4" />
    </section>
  )
}

export default BusinessCenterAllSection
