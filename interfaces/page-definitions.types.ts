import {IconProp} from "@fortawesome/fontawesome-svg-core";

export interface ITimestamps {
  createdAt: string
  updatedAt: string
}

export interface IBaseDefinition extends ITimestamps {
  id: string
}

/**
 * Page Definitions
 */
export interface IDynamicPageDefinition extends IBaseDefinition {
  pageName: string
  path: string
  sections: IDynamicSectionDefinition[]
}

/**
 * Base Section Definitions
 */
export type ISectionType =
  | "HeroSection"
  | "DigitalAdventures"
  | "JunketForBusiness"
  | "CreateYourAdventure"
  | "IndexHeroSection"
  | "GenericSection"
  | "BusinessRightHalfSection"
  | "BusinessCenterAllSection"
  | "JunketBubbles"
  | "BusinessForm"
  | "BusinessHowItWorks"

export interface IDynamicSectionDefinition extends IBaseDefinition {
  sectionName: string
  sectionTitle: string
  sectionType: ISectionType
  components: IDynamicComponentDefinition[]
  sectionBackground?: ISectionBackground
}

export interface ISectionBackground {
  url: string
}

/**
 * Base Component Definitions
 */
export type IComponentType =
  | "hero-title"
  | "image"
  | "logo"
  | "paragraph"
  | "counter"
  | "section-title"
  | "call-to-action-button"
  | "app-store-buttons"
  | "business-right-half-section"
  | "bubble-div"
  | "how-it-works"

export type IDynamicComponentDefinition =
  | IBaseComponent
  | IImageComponent
  | IParagraphComponent
  | ICounterComponent
  | ISectionTitleComponent
  | ICallToActionButtonComponent
  | ILogoComponent
  | IAppStoreButtonsComponent
  | IBubbleDivComponent
  | IHowItWorksStepComponent

export interface IBaseComponent extends IBaseDefinition {
  name: string // How its called in the CMS
  type: IComponentType
  cssClasses?: string
}

export interface IImageComponent extends IBaseComponent {
  imagePath: string
  imageAltText: string
  type: "image"
}

export interface IParagraphComponent extends IBaseComponent {
  displayText: string[]
  displayTextTwo: string[]
  hasColumns: boolean
  displayTextClasses: string
  displayTextWrapperClasses: string
  type: "paragraph"
}

export interface ICounterData {
  key: string
  count: number
  borderColor: string
}

export interface ICounterComponent extends IBaseComponent {
  type: "counter"
  counter: ICounterData[]
}

export interface ILogoComponent extends IBaseComponent {
  type: "logo"
  image: {
    url: string
  }
  imageAltText: string
}

export interface ISectionTitleComponent extends IBaseComponent {
  type: "section-title"
  displayText: string
}

export interface ICallToActionButtonComponent extends IBaseComponent {
  type: "call-to-action-button"
  displayText: string,
  gradientStyle?: boolean
  onClick?: any,
  href?: any,
}

export interface IAppStoreButtonsComponent extends IBaseComponent {
  type: "app-store-buttons"
  displayText: string
}

export interface IBubbleDivComponent extends IBaseComponent {
  type: "bubble-div"
  name: string
  bubbleTitle: string
  displayText: string
  displayTextClasses: string
  image: {
    url: string
  }
}

export interface IHowItWorksStepComponent extends IBaseComponent {
  type: "how-it-works"
  name: string
  displayText: string
  hex: string
  icon: string
  image: {
    url: string
  }
}
