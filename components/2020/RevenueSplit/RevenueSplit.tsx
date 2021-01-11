import React from "react"
import "./RevenueSplit.scss"
import Fade from 'react-reveal/Fade'
import Bounce from 'react-reveal/Bounce'

const RevenueSplit = () => {
  return (
    <section id="revenue-split" className="revenueSplitRoot">
      <Fade left wait={2000}>
        <div className="revenueHeaderContainer">
          <h1 className="revenueHeader">Junket</h1>
          <h1 className="revenueHeader">Revenue Split</h1>
        </div>
      </Fade>
      <div className="revenueContainer">
        <Bounce  bottom delay={800} wait={3000}>
          <div className="revenueModelContainer">
            <img src={require("../../../public/img/2020/starter-split.svg")} className="splitImage" alt="starter-split"/>
          </div>
        </Bounce >
        <Bounce  bottom delay={950} wait={3000}>
          <div className="revenueModelContainer">
            <img src={require("../../../public/img/2020/business-split.svg")} className="splitImage" alt="business-split"/>
          </div>
        </Bounce >
        <Bounce  bottom delay={1100} wait={3000}>
          <div className="revenueModelContainer">
            <img src={require("../../../public/img/2020/junketeer-split.svg")} className="splitImage" alt="junketeer-split"/>
          </div>
        </Bounce >
      </div>
    </section>
  )
}

export default RevenueSplit
