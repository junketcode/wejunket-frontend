import * as React from "react"
import "./Footer.scss"

const Footer = () => {
  return (
    <footer className="junket-footer">
      <img src={require("../../public/img/v2/sufering1.svg")} alt="dotted wavy path"/>
      <div className="footer-copyright">
        <p className="copyright-date">
          © {new Date().getFullYear()} Junket&nbsp;|
        </p>
        <a href="/terms-conditions" className="footer-policy">&nbsp;Terms & Conditions&nbsp;|</a>
        <a href="/privacy-policy" className="footer-policy">&nbsp;Privacy Policy&nbsp;|</a>
        <a href="/copyright" className="footer-policy">&nbsp;Copyright</a>
      </div>
      
    </footer>
  )
}

export default Footer
