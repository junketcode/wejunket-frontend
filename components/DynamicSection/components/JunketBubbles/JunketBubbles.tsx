import * as React from "react"
import Circle from "./SVG/Circle"
import { circles } from "./Circles"
// @ts-ignore
import Background from "../../../../public/img/Bitmap.png"
import {IDynamicSectionDefinition} from "../../../../interfaces/page-definitions.types";
import DynamicComponent from "../../../DynamicComponent/DynamicComponent";
import environment from "../../../../environment/environment";

const JunketBubbles = (props: any) => {

  const {
    sectionName,
    sectionTitle,
    sectionBackground,
    components,
  } = props as IDynamicSectionDefinition

  //TODO: THIS SHOULD PROBABLY COME FROM THE ENVIRONMENT
  const backgroundURL = [`${environment.CMS_API_BASE}`, sectionBackground.url]

  const style = {
    backgroundImage: `url(${backgroundURL.join("")})`,
    backgroundPosition: "bottom center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    width: "100%",
    height: "560px",
  }

  return (
    <section id={props.sectionTitle}>
      <div className="ml-4 mr-4 lg:ml-24 lg:mr-24 pt-8">
        <h1 className="text-gray-800 text-4xl">
          How will{" "}
          <strong>
            <i>you</i>
          </strong>{" "}
          Junket
        </h1>
        <p>Click a bubble to learn more</p>
      </div>
      <div>
        {components &&
        components.map(componentProps => (
            <DynamicComponent key={componentProps.name} {...(componentProps as any)} />
        ))}
      </div>
    </section>
  )
}

export default JunketBubbles
