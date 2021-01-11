import * as React from "react"
import { IDynamicSectionDefinition } from "../../../../interfaces/page-definitions.types"
import DynamicComponent from "../../../DynamicComponent/DynamicComponent"
import environment from "../../../../environment/environment";

const DigitalAdventures = (props: IDynamicSectionDefinition) => {
  const { sectionName, components, sectionBackground } = props;
  const baseURL = [`${environment.CMS_API_BASE}`, sectionBackground.url];

  const style =
    sectionBackground && sectionBackground.url
      ? {
          backgroundImage: `url(${baseURL.join('')})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: 400,
        }
      : {}

  return (
    <section
      id={sectionName}
      className="min-w-full min-h-full flex flex-col lg:flex-row font-sans overflow-hidden"
    >
      <div className="h-auto p-5 md:p-20 lg:w-1/2">
        {components &&
          components.map(component => (
            <DynamicComponent key={component.name} {...(component as any)} />
          ))}
      </div>
      <div style={style} className="h-auto mb-6 lg:w-1/2" />
    </section>
  )
}

export default DigitalAdventures
