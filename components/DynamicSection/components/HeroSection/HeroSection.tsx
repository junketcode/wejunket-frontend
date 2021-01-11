import * as React from "react"
import { IDynamicSectionDefinition } from "../../../../interfaces/page-definitions.types"
import DynamicComponent from "../../../DynamicComponent/DynamicComponent"
import environment from "../../../../environment/environment";

const HeroSection = (props: any) => {
  const {
    sectionName,
    sectionTitle,
    sectionBackground,
    components,
  } = props as IDynamicSectionDefinition

  const backgroundURL = [`${environment.CMS_API_BASE}`, sectionBackground.url]

  const style =
    sectionBackground && sectionBackground.url
      ? {
          backgroundImage: `url(${backgroundURL.join("")})`,
          backgroundSize: "cover",
          marginTop: "-80px",
        }
      : {}

  return (
    <section
      id={sectionName}
      style={style}
      className="flex bg-local min-h-1/2 lg:min-h-screen px-8 py-10 pt-24 content-center"
    >
      <div className="flex flex-col justify-center align-middle md:justify-center md:align-top md:w-1/1 lg:w-5/12 lg:ml-20 lg:min-h-0 lg:justify-center text-center">
        {components &&
          components.map(componentProps => (
            <DynamicComponent key={componentProps.name} {...(componentProps as any)} />
          ))}
      </div>
    </section>
  )
}

export default HeroSection
