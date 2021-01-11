import React from "react"

const Apple = props => {
  const componentContent = {
    aClasses: [props.noAClass ? null : "mx-auto"],
    imgClasses: [
      "w-56",
      "lg:h-24",
      "lg:mt-4",
      "lg:p-4",
      "xl:h-32",
      "xl:mt-0",
      "xl:p-0",
      "xl:ml-10",
    ],
    href: "https://apps.apple.com/us/app/junket-explore-your-world/id1297242830",
    altText: "Download in the App Store",
    btnPath: "img/app-store/app-store-badge-black.svg",
  }

  return (
    <a
      className={componentContent.aClasses.join(" ")}
      href={componentContent.href}
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        className={
          props.className
            ? props.className
            : componentContent.imgClasses.join(" ")
        }
        alt={componentContent.altText}
        src={require("../../../../../public/img/app-store/app-store-badge-black.svg")}
      />
    </a>
  )
}

export default Apple
