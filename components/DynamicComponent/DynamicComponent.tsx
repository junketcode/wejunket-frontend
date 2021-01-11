import * as React from "react"
import {
  IAppStoreButtonsComponent,
  ICallToActionButtonComponent,
  ICounterComponent,
  IDynamicComponentDefinition,
  ILogoComponent,
  IParagraphComponent,
  ISectionTitleComponent,
  IBubbleDivComponent,
  IHowItWorksStepComponent,
} from "../../interfaces/page-definitions.types"
import Paragraph from "./components/Paragraph/Paragraph"
import StatCounter from "./components/StatCounter/StatCounter"
import CallToActionButton from "./components/CallToActionButton/CallToActionButton"
import SectionTitle from "./components/SectionTitle/SectionTitle"
import Logo from "./components/Logo/Logo"
import BusinessRightHalfSection from "../DynamicSection/components/BusinessRightHalfSection/BusinessRightHalfSection"
import AppStoreButtons from "./components/AppStoreButtons/AppStoreButtons"
import BubbleDiv from "../BubbleDiv/BubbleDiv"
import HowItWorksStep from "./components/HowItWorksStep/HowItWorksStep";

const DynamicComponent = (props: IDynamicComponentDefinition) => {
  const { type, name } = props

  switch (type) {
    case "paragraph":
      return <Paragraph {...(props as IParagraphComponent)} />
    case "counter":
      return <StatCounter {...(props as ICounterComponent)} />
    case "call-to-action-button":
      return <CallToActionButton {...(props as ICallToActionButtonComponent)} />
    case "section-title":
      return <SectionTitle {...(props as ISectionTitleComponent)} />
    case "logo":
      return <Logo {...(props as ILogoComponent)} />
    case "app-store-buttons":
      return <AppStoreButtons {...(props as IAppStoreButtonsComponent)} />
    case "bubble-div":
      return <BubbleDiv {...(props as IBubbleDivComponent)} />
    case "how-it-works":
      return <HowItWorksStep {...(props as IHowItWorksStepComponent)} />
    case "hero-title":
    default:
  }
  return (
    <div className="text-red-800 py-12">
      Type {type} with name {name} is not defined as a dynamic component...
    </div>
  )
}

export default DynamicComponent
