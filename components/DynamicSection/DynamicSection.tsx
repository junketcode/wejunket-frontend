import * as React from "react"
import DigitalAdventures from "./components/DigitalAdventures/DigitalAdventures"
import HeroSection from "./components/HeroSection/HeroSection"
import JunketForBusiness from "./components/JunketForBusiness/JunketForBusiness"
import CreateYourAdventure from "./components/CreateYourAdventure/CreateYourAdventure"
import { IDynamicSectionDefinition } from "../../interfaces/page-definitions.types"
import GenericSection from "./components/GenericSection/GenericSection";
import BusinessRightHalfSection from "./components/BusinessRightHalfSection/BusinessRightHalfSection";
import BusinessCenterAllSection from "./components/BusinessAllCenterSection/BusinessAllCenterSection";
import BusinessFormSection from "./components/BusinessFormSection/BusinessFormSection";
import JunketBubbles from "./components/JunketBubbles/JunketBubbles";
import BusinessHowItWorks from "./components/BusinessHowItWorks/BusinessHowItWorks";

const DynamicSection = (props: IDynamicSectionDefinition) => {
  const { sectionType } = props

  switch (sectionType) {
    case "CreateYourAdventure":
      return <CreateYourAdventure {...props} />
    case "DigitalAdventures":
      return <DigitalAdventures {...props} />
    case "HeroSection":
    case "IndexHeroSection":
      return <HeroSection {...props} />
    case "JunketForBusiness":
      return <JunketForBusiness {...props} />
    case "BusinessRightHalfSection":
      return <BusinessRightHalfSection  {...props} />
    case "BusinessCenterAllSection":
      return <BusinessCenterAllSection  {...props} />
    case "JunketBubbles":
      return <JunketBubbles  {...props} />
    case "BusinessForm":
      return <BusinessFormSection  {...props} />
    case "BusinessHowItWorks":
      return <BusinessHowItWorks {...props} />
    default:
  }
  return <GenericSection {...props} />
}

export default DynamicSection
