import React, { useEffect, useState } from "react"
import "./LimitedUserPopUp.scss"

const LimitedUserPopUp = ({ closeModalHandler, modalOpen }) => {
  return (
    <div
      className={["usagePopUpRoot", modalOpen ? "popIn" : "popOut"].join(" ")}
    >
      <div className="closeContainer">
        <div className="xClose" onClick={closeModalHandler}>
          <p>X</p>
        </div>
      </div>
      <div className="limited-user-modal">
        <div className="topContainer">
          <h1>Limited</h1>
        </div>
        <div className="bottomContainer">
          <div className="description">
            Please purchase this Junket to move next tour.
          </div>
          <div className="purchase-junket-container">
            <button className="purchase-junket"> Purchase</button>
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default LimitedUserPopUp
