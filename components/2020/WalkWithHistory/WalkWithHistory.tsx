import React from "react"
import "./WalkWithHistory.scss"
import Apple from "../../DynamicComponent/components/AppStoreButtons/components/Apple";
import Google from "../../DynamicComponent/components/AppStoreButtons/components/Google";

const WalkWithHistory = () => {
  return (
    <section id="walk-with-history" className="WalkWithHistoryRoot">
      <div className="walkOverlay">
        <div className="walkContent">
          <div className="walkLeft">
            <img
              src={require("../../../public/img/2020/watch.png")}
              className="watch"
            />
          </div>
          <div className="walkRight">
            <div className="walkRightTop">
              <h1 className="walkHeader">Walk With History</h1>
              <p className="walkText">
                Retrace the steps of Jack the Ripper in London, pursue Al Capone
                in Chicago, visit the filming locations of Harry Potter or
                Breaking Bad, or get scared on a ghost tour in one of 20 cities!
                Or, create your own experience and share it with your friends,
                or the world!
              </p>
            </div>
            <div className="walkRightBottom">
              <div className="rightBottomContent">
                <h2 className="downloadHeader">Download For Free</h2>
                <div className="walkButtonsContainer">
                  <Google className="walkGoogleButton" />
                  <Apple className="walkAppleButton" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WalkWithHistory
