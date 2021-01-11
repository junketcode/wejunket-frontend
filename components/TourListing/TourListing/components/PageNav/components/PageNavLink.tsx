import * as React from "react"

const PageNavLink = ({ isDisabled, link_text, handleOnClick }: any) => {
  const classes = [
    "inline-block",
    "border",
    "border-white",
    "rounded",
    "hover:border-gray-200",
    "text-blue-500",
    "hover:bg-gray-200",
    "py-2",
    "px-4",
  ].join(" ")

  const disabledClasses = [
    "inline-block",
    "py-2",
    "px-4",
    "text-gray-400",
    "cursor-not-allowed",
  ].join(" ")

  if (isDisabled) {
    return (
      <button className={disabledClasses}>
        {link_text}
      </button>
    )
  }

  return (
    <button
      className={classes}
      onClick={handleOnClick}
    >
      {link_text}
    </button>
  )
}

export default PageNavLink
