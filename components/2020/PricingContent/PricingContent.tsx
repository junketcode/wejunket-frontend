import React, {useState} from "react"
import "./PricingContent.scss"
import Link from "next/link"
import environment from "../../../environment/environment"
import UsagePopUp from "../UsagePopUp/UsagePopUp";

const PricingContent = () => {
  const [modalOpen, setModalOpen] = useState(false)

  const openModalHandler = () => {
    console.log("hey there")
    setModalOpen(true)
  }

  const closeModalHandler = () => {
    setModalOpen(false)
  }

  return (
    <React.Fragment>
      <section id="pricing-section" className="pricingRoot">
        <UsagePopUp closeModalHandler={closeModalHandler} modalOpen={modalOpen}/>
        <div className="pricingFlex">
          <div className="pricingHeaderContainer">
            <h1 className="pricingHeader">Junket</h1>
            <h1 className="pricingHeader">Pricing Model</h1>
            <p className="pricingDescription">
              Bring your experience into the 21st Century's App economy with the
              Junket platform.
            </p>
            <ul>
              <li>
                <img
                  src={require("../../../public/img/2020/arrow-1.svg")}
                  className="listArrow"
                  alt="arrow"
                />
                <p>&nbsp;Create, manage, & deliver your content</p>
              </li>
              <li>
                <img
                  src={require("../../../public/img/2020/arrow-1.svg")}
                  className="listArrow"
                  alt="arrow"
                />
                <p>&nbsp;Generate revenue for your tour</p>
              </li>
              <li>
                <img
                  src={require("../../../public/img/2020/arrow-1.svg")}
                  className="listArrow"
                  alt="arrow"
                />
                <p>&nbsp;No maintenance, easy to use</p>
              </li>
              <li>
                <img
                  src={require("../../../public/img/2020/arrow-1.svg")}
                  className="listArrow"
                  alt="arrow"
                />
                <p>&nbsp;State of the art features</p>
              </li>
            </ul>
          </div>
          <div className="pricingContainer">
            <div className="pricingModelContainer">
              <img src={require("../../../public/img/2020/starter-new.svg")} alt="starter"/>
              <div className="selectPlanContainer">
                <Link href={{ pathname: "sign-up" }}>
                  <button className="selectPlanButton">Select Plan</button>
                </Link>
              </div>
            </div>
            <div className="pricingModelContainer centerContainer">
              <img src={require("../../../public/img/2020/business-new.svg")} alt="business"/>
              <div className="selectPlanContainer">
                <Link
                  href={{
                    pathname: "sign-up",
                    query: {
                      monthly: environment.BUSINESS_MONTHLY,
                      yearly: environment.BUSINESS_YEARLY,
                      planName: 'business'
                    },
                  }}
                >
                  <button className="selectPlanButton">Select Plan</button>
                </Link>
              </div>
            </div>
            <div className="pricingModelContainer">
              <img
                src={require("../../../public/img/2020/junketeer-new.svg")}
                alt="junketeer"
              />
              <div className="selectPlanContainer">
                <Link
                  href={{
                    pathname: "sign-up",
                    query: {
                      monthly: environment.JUNKETEER_MONTHLY,
                      yearly: environment.JUNKETEER_YEARLY,
                      planName: 'junketeer'
                    },
                  }}
                >
                  <button className="selectPlanButton">Select Plan</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="additionalJunketsContainer">
          <h2>
            Additional Junkets Are <span>$29/month</span>
          </h2>
          <h2 style={{cursor: "pointer"}} onClick={openModalHandler}>See Prices for Additional Services and Usage Fees</h2>
        </div>
      </section>
    </React.Fragment>
  )
}

export default PricingContent
