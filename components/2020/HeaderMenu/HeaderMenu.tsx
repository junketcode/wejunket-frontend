import React from "react"
import "./HeaderMenu.scss"
import Link from "next/link";

const HeaderMenu = () => {
    return (
        <div className="headerMenuRoot">
            <Link href={"/business"}>
                <div className="headerMenuItem">
                    <p className="headerMenuLinkText">Business</p>
                    <div className="menuUnderline"></div>
                </div>
            </Link>
            <Link href={"/about-us"}>
                <div className="headerMenuItem">
                    <p className="headerMenuLinkText">About Us</p>
                    <div className="menuUnderline"></div>
                </div>
            </Link>
            <Link href={"/what-is-junket"}>
                <div className="headerMenuItem">
                    <p className="headerMenuLinkText">What is junket</p>
                    <div className="menuUnderline"></div>
                </div>
            </Link>
            <Link href={"/junkets"}>
                <div className="headerMenuItem">
                    <p className="headerMenuLinkText">Junkets</p>
                    <div className="menuUnderline"></div>
                </div>
            </Link>
            <Link href={"/contact-us"}>
                <div className="headerMenuItem">
                    <p className="headerMenuLinkText">Contact Us</p>
                    <div className="menuUnderline"></div>
                </div>
            </Link>            
        </div>
    )
}

export default HeaderMenu
