import * as React from "react";
import {ILogoComponent} from "../../../../interfaces/page-definitions.types";
import environment from "../../../../environment/environment";

const Logo = ({image, imageAltText, cssClasses}: ILogoComponent) => {

  const imageURL = [`${environment.CMS_API_BASE}`, image.url];

  return (
    <img
      alt={imageAltText || "Junket Logo"}
      src={imageURL.join('')}
      className={cssClasses || ""}
    />
  )
}

export default Logo
