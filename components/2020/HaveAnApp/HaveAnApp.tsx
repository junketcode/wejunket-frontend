import React from "react"
import "./HaveAnApp.scss"

const HaveAnApp = () => {
  return (
    <section id="have-an-app" className="HaveAnAppRoot">
      <div className="HaveAnAppOverlay">
        <div className="HaveAnAppContent">
          <div className="HaveAnAppLeft">
            <img
              src={require("../../../public/img/2020/biz-two-iphones.png")}
              className="HaveAnAppPhones"
            />
          </div>
          <div className="HaveAnAppRight">
            <div className="HaveAnAppRightTop">
              <h1 className="HaveAnAppHeader">Already Have An App?</h1>
              <p className="HaveAnAppText">
                That's ok, we make it better. Our software easily integrates
                with existing mobile applications so that you can add Junket
                capability and features to the app you already have!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HaveAnApp
