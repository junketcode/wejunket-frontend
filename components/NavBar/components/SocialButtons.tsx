import * as React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faFacebookSquare,
  faTwitter,
  faInstagram,
  faYoutubeSquare,
  faPinterest,
} from "@fortawesome/free-brands-svg-icons"

const iconList = [
  {
    name: "Facebook",
    icon: faFacebookSquare,
    href: "https://www.facebook.com/ITourMobile",
  },
  {
    name: "Twitter",
    icon: faTwitter,
    href: "https://www.twitter.com/itourmobile",
  },
  {
    name: "Pinterest",
    icon: faPinterest,
    href: "https://www.pinterest.com/itourmobile/",
  },
  {
    name: "YouTube",
    icon: faYoutubeSquare,
    href: "https://www.youtube.com/channel/UCLFpVtKm82ZPDdkRXd-VrOw",
  },
]

const SocialButtons = ({ invertedColors }: any) => {
  const colors = invertedColors
    ? "border-white text-white"
    : "border-blue-800 text-blue-800"

  const classes = [
    "flex",
    "h-10",
    "w-10",
    "border-2",
    "p-2",
    "ml-1",
    "rounded-full",
    "cursor-pointer",
    "justify-center",
    "align-middle",
    colors,
  ].join(" ")
  return (
    <div className="flex flex-row justify-center align-middle">
      {iconList &&
        iconList.map(({ name, icon, href }, index) => (
          <a key={name} className={classes} href={href} target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={icon} style={{ marginTop: "2px" }} />
          </a>
        ))}
    </div>
  )
}

export default SocialButtons
