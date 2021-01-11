import * as React from "react"
import Link from "next/link"

const NavBarLoginBtn = ({ isLoggedIn }) => {
  const logInClasses = [
    "inline-block",
    "text-black",
    "font-sans",
    "px-4",
    "py-2",
    "leading-none",
    "border",
    "border-black",
    "rounded",
    "hover:bg-black",
    "hover:text-white",
    "mt-0",
  ].join(" ")

  const logOutClasses = [
    "inline-block",
    "text-red-800",
    "font-sans",
    "px-4",
    "py-2",
    "leading-none",
    "border",
    "border-red-800",
    "rounded",
    "hover:bg-red-800",
    "hover:text-white",
    "hover:bg-white",
    "mt-4",
    "lg:mt-0",
  ].join(" ")

  const button = isLoggedIn ? (
      <a
          href="https://cms.wejunket.com"
          target="_blank"
          rel="noopener noreferrer"
      >
        <button className={logInClasses} name="Login">Login</button>
      </a>
  ) : (
    <a
      href="https://cms.wejunket.com"
      target="_blank"
      rel="noopener noreferrer"
    >
      <button className={logInClasses} name="Login">Login</button>
    </a>
  )

  return <div className="flex lg:items-center">{button}</div>
}

export default NavBarLoginBtn
