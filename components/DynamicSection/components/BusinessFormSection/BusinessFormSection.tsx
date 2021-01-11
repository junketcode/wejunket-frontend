import React from "react"
import { IDynamicSectionDefinition } from "../../../../interfaces/page-definitions.types"
import DynamicComponent from "../../../DynamicComponent/DynamicComponent"
import Form from "./Components/Form/Form";
import Arrow from "./Components/Arrow/arrow";
import environment from "../../../../environment/environment";

const BusinessFormSection = ({
  sectionName,
  components,
  sectionBackground,
}: IDynamicSectionDefinition) => {
  const baseURL = [`${environment.CMS_API_BASE}`, sectionBackground.url]
  const style =
    sectionBackground && sectionBackground.url
      ? {
          backgroundImage: `url(${baseURL.join("")})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "400px",
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
        }
      : {}
  return (
    <section id={sectionName} className="max-w-full flex flex-col lg:flex-row">
      <div className="flex flex-col justify-center items-center pt-10 pb-10 pr-4 max-w-full bg-gray-800 w-1/1 lg:w-1/2">
        {components &&
          components.map(component => (
            <DynamicComponent key={component.name} {...(component as any)} />
          ))}
          <Arrow />
      </div>
      <div style={style} className="w-1/1 pt-8 pb-8 lg:w-1/2">
        <Form/>
      </div>
    </section>
  )
}

export default BusinessFormSection
