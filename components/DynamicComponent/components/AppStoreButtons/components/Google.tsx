import React from "react"

const Google = (props) => {
  const { className } = props
  const componentContent = {
    aClasses: ["w-64", "mx-auto"],
    imgClasses: ["w-64", "m-0", "lg:h-32", "lg:p-4", "xl:p-2", "xl:-ml-5"],
    href: "https://play.google.com/store/apps/details?id=com.junket.app",
    altText: "Get it on Google Play",
    btnPath:
      "https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png",
  }

  return (
    <a
      className={className ? className : componentContent.aClasses.join(" ")}
      href={componentContent.href}
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        className={className ? className : componentContent.imgClasses.join(" ")}
        alt={componentContent.altText}
        src={componentContent.btnPath}
      />
    </a>
  )
}

export default Google
