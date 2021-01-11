import * as React from "react"

const NavBarLoginBtn = ({ isLoggedIn }) => {

  const button = isLoggedIn ? (
  
        <div className="headerMenuItem cms-login">
            <a href="https://cms.wejunket.com" target="_blank" rel="noopener noreferrer" className="headerMenuLinkText">Login</a>
            <div className="menuUnderline"></div>
        </div>
    
  ) : (
    <div className="headerMenuItem cms-login">
        <a href="https://cms.wejunket.com" target="_blank" rel="noopener noreferrer" className="headerMenuLinkText">Login</a>
        <div className="menuUnderline"></div>
    </div>
  )

  return <div className="flex lg:items-center">{button}</div>
}

export default NavBarLoginBtn
