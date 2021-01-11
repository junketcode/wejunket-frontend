import * as React from "react"
import SocialButtons from "./SocialButtons"
import Link from "next/link"

const SideDrawer = ({ handleClose }) => {
  const navItems = [
    {
      name: "Business",
      link: "/business",
    },
    // {
    //   name: "Junkets",
    //   link: "/junkets",
    // },
    {
      name: "Contact Us",
      link: "/contact-us",
    },
    {
      name: "Login",
      link: "https://cms.wejunket.com"
    }
  ]

  return (
    <React.Fragment>
      <div
        id="side-drawer-overlay"
        className="fixed top-0 right-0 w-screen h-screen bg-white opacity-50 z-40"
        onClick={handleClose}
      />
      <div
        id="side-drawer-wrapper"
        className="fixed top-0 right-0 w-2/3 lg:w-1/3 h-screen bg-white flex-col pt-4 slideInRight fast z-50"
      >
        {/*<SocialButtons invertedColors={true} />*/}
        <p className="w-full font-sans uppercase text-center text-black p-2 mb-6">
          Create your own adventures today
        </p>
        {navItems.map(item => (
          <div
            key={item.name}
            className="w-full h-12 flex justify-center align-middle text-center hover:bg-gray-400"
          >
            <Link href={item.link}>
              <a
                key={item.name}
                className="w-full align-middle text-black font-bold"
              >
                {item.name}
              </a>
            </Link>
          </div>
        ))}
      </div>
    </React.Fragment>
  )
}

export default SideDrawer
