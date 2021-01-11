import React from "react"
import { IDynamicSectionDefinition } from "../../../../interfaces/page-definitions.types"
import DynamicComponent from "../../../DynamicComponent/DynamicComponent"
import environment from "../../../../environment/environment";

const BusinessRightHalfSection = ({
  sectionName,
  sectionBackground,
  components,
}: IDynamicSectionDefinition) => {
    const baseURL = [`${environment.CMS_API_BASE}`, sectionBackground.url]
    const style =
        sectionBackground && sectionBackground.url
            ? {
                backgroundImage: `url(${baseURL.join('')})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                minHeight: 650,
                display: "flex",
                justifyContent: "flex-end",
                alignItems: "center"
            }
            : {}
    return (
        <section id={sectionName} style={style} className="max-w-full">
            <div className="pt-10 pb-10 pr-4 max-w-full w-1/2 lg:w-1/2">
                {components &&
                components.map(component => (
                    <DynamicComponent key={component.name} {...(component as any)} />
                ))}
            </div>
        </section>
    )
}

export default BusinessRightHalfSection
