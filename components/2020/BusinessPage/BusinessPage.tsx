import React from "react"
import "./BusinessPage.scss"
import Link from "next/link"
import YoutubePlayer from "react-player/lib/players/YouTube"

const BusinessPage = () => {
  return (
    <section id="business-page" className="bizPageRoot">
      <div className="bizOverlay">
        <div className="bizContent">
          <div className="bizUpper">
            <div className="bizUpperLeft">
              <h1 className="bizHeader">Who We Serve</h1>
              <div className="bizListFlex">
                <div className="bizLeftList">
                  <ul>
                    <li>
                      <img
                        src={require("../../../public/img/2020/arrow-1.png")}
                        className="bizArrow"
                        alt="arrow"
                      />
                      <p className="bizPageText">Travelers</p>
                    </li>
                    <li>
                      <img
                        src={require("../../../public/img/2020/arrow-1.png")}
                        className="bizArrow"
                        alt="arrow"
                      />
                      <p className="bizPageText">Tour Operators</p>
                    </li>
                    <li>
                      <img
                        src={require("../../../public/img/2020/arrow-1.png")}
                        className="bizArrow"
                        alt="arrow"
                      />
                      <p className="bizPageText">Museums</p>
                    </li>
                  </ul>
                </div>
                <div className="bizRightList">
                  <ul>
                    <li>
                      <img
                        src={require("../../../public/img/2020/arrow-1.png")}
                        className="bizArrow"
                        alt="arrow"
                      />
                      <p className="bizPageText">Schools</p>
                    </li>
                    <li>
                      <img
                        src={require("../../../public/img/2020/arrow-1.png")}
                        className="bizArrow"
                        alt="arrow"
                      />
                      <p className="bizPageText">Destinations</p>
                    </li>
                    <li>
                      <img
                        src={require("../../../public/img/2020/arrow-1.png")}
                        className="bizArrow"
                        alt="arrow"
                      />
                      <p className="bizPageText">Cities</p>
                    </li>
                  </ul>
                </div>
              </div>
              <p className="bizLeftText">
                Junket is a platform and app that delivers scavenger hunts and
                tours to mobile devices. The future of travel and tourism is
                digital, and interactive. Offering a digital experience is
                necessary.
              </p>
            </div>
            <div className="bizUpperCenter">
              <h1 className="bizHeader">Why Junket</h1>
              <ul className="bizList">
                <li>
                  <img
                    src={require("../../../public/img/2020/arrow-1.png")}
                    className="bizArrow"
                    alt="arrow"
                  />
                  <p className="bizPageText">
                    Travelers want to enjoy an experience when they want, where
                    they want, with who they want.
                  </p>
                </li>
                <li>
                  <img
                    src={require("../../../public/img/2020/arrow-1.png")}
                    className="bizArrow"
                    alt="arrow"
                  />
                  <p className="bizPageText">
                    Experiences aren't constrained by a start time, or tour
                    guides.
                  </p>
                </li>
                <li>
                  <img
                    src={require("../../../public/img/2020/arrow-1.png")}
                    className="bizArrow"
                    alt="arrow"
                  />
                  <p className="bizPageText">Low-cost and generates profits</p>
                </li>
                <li>
                  <img
                    src={require("../../../public/img/2020/arrow-1.png")}
                    className="bizArrow"
                    alt="arrow"
                  />
                  <p className="bizPageText">Edit and control your content</p>
                </li>
              </ul>
            </div>
            <div className="bizUpperRight">
              <div className="smartphone">
                <div className="content">
                  <YoutubePlayer
                    url="https://youtu.be/6FVWLZ6kqWg"
                    playing={false}
                    preload="true"
                    width="100%"
                    height="410px"
                    title="Junket Example"
                  />
                </div>
              </div>
              {/*  */}
            </div>
          </div>
          <div className="bizLower">
            <div className="bizLowerLeft">
              <h1 className="scheduleContactHeader">Already Have An App?</h1>
              <p className="HaveAppText">
                That's ok, we make it better. Our software easily integrates
                with existing mobile applications so that you can add Junket
                capability and features to the app you already have!
              </p>
            </div>
            {/* <div className="bizLowerRight">
              <h1 className="scheduleContactHeader">Pricing</h1>
              <ul>
                <li>
                  <img
                    src={require("../../../public/img/2020/white-arrow.svg")}
                    className="bizArrow"
                    alt="arrow"
                  />
                  <p className="bizPageText">
                    Simple pricing starting at $120/month per experience
                  </p>
                </li>
                <li>
                  <img
                    src={require("../../../public/img/2020/white-arrow.svg")}
                    className="bizArrow"
                    alt="arrow"
                  />
                  <p className="bizPageText">
                    Flexible options for multiple experiences available
                  </p>
                </li>
              </ul>
              <Link href={"/contact-us"}>
                <button className="requestButton">Request A Quote</button>
              </Link>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  )
}

export default BusinessPage
