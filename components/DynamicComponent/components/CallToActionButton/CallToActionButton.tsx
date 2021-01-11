import * as React from "react"
import Link from "next/link"
import { ICallToActionButtonComponent } from "../../../../interfaces/page-definitions.types"

const CallToActionButton = ({
  onClick,
  gradientStyle,
  cssClasses,
  displayText,
}: ICallToActionButtonComponent) => {
  const defaultButtonStyles = [
    "w-full",
    "lg:w-2/3",
    "mt-4",
    "bg-white",
    "hover:bg-blue-700",
    "text-grey-800",
    "font-bold",
    "uppercase",
    "py-2",
    "px-4",
    "border",
    "rounded-lg",
  ].join(" ")

  const emailHandler = () => {
    window.open('mailto:contact@wejunket.com?subject=Information%20About%20Junket', '_blank', 'noopener noreferrer')
  };

  return (
    <button
      onClick={onClick ? onClick : emailHandler}
      className={cssClasses || defaultButtonStyles}
      style={
        gradientStyle
          ? {
              backgroundImage:
                "linear-gradient(225deg, #4DDCA3 0%, #56A9E7 49%, #E73A43 100%)",
              color: "white",
              outline: "none",
            }
          : null
      }
    >
      {displayText}
    </button>
  )
}

export default CallToActionButton
