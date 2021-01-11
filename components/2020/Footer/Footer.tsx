import React from "react"
import "./Footer.scss"
import Facebook from "../Social/Facebook/Facebook"
import Twitter from "../Social/Twitter/Twitter"
import Instagram from "../Social/Instagram/Instagram"
import Youtube from "../Social/Youtube/Youtube"
import Google from "../../DynamicComponent/components/AppStoreButtons/components/Google"
import Apple from "../../DynamicComponent/components/AppStoreButtons/components/Apple"
import Link from "next/link"

const Footer = () => {
  return (
    <footer className="footerRoot">
      <div className="footerContent">
        <div className="footerThirtyThreeWide flexStartFooter">
          <p className="copyright">
            © {new Date().getFullYear()} Junket{" "}
            <Link href={"/terms-conditions"}>Terms & Conditions</Link>{" "}|{" "}
            <Link href={"/privacy-policy"}>Privacy Policy</Link>{" "}|{" "}
            <Link href={"/copyright"}>Copyright</Link>
          </p>
        </div>
        {/* <div className="footerThirtyThreeWide flexCenterFooter">
          <Apple noAClass className="footerAppleButton" />
          <Google className="googleButton" />
        </div>
        <div className="footerThirtyThreeWide flexEndFooter">
          <div className="footerButtonsContainer">
            <Facebook white />
            <Instagram white />
            <Twitter white />
            <Youtube white />
          </div>
        </div> */}
      </div>
    </footer>
  )
}

export default Footer
