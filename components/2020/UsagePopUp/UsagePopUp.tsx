import React, { useEffect, useState } from "react"
import "./UsagePopUp.scss"

const UsagePopUp = ({ closeModalHandler, modalOpen }) => {
  return (
    <div
      className={["usagePopUpRoot", modalOpen ? "popIn" : "popOut"].join(" ")}
    >
      <div className="closeContainer">
        <div className="xClose" onClick={closeModalHandler}>
          <p>X</p>
        </div>
      </div>
      <div className="usageModal">
        <div className="topContainer">
          <h1>Download Usage Fee</h1>
        </div>
        <div className="bottomContainer">
          <div className="tableContainer">
            <table>
              <thead>
                <tr>
                  <th className="whiteDivider">Tier</th>
                  <th className="tealDivider">Downloads</th>
                  <th className="tealDivider">Fee</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="whiteDivider">Tier 1</td>
                  <td className="tealDivider">25</td>
                  <td className="tealDivider">$0</td>
                </tr>
                
                <tr>
                  <td className="whiteDivider">Tier 2</td>
                  <td className="tealDivider">100</td>
                  <td className="tealDivider">$0</td>
                </tr>
                
                <tr>
                  <td className="whiteDivider">Tier 3</td>
                  <td className="tealDivider">150</td>
                  <td className="tealDivider">$0</td>
                </tr>
                
                <tr>
                  <td className="whiteDivider">Tier 4</td>
                  <td className="tealDivider">500</td>
                  <td className="tealDivider">$100</td>
                </tr>
                
                <tr>
                  <td className="whiteDivider">Tier 5</td>
                  <td className="tealDivider">1000</td>
                  <td className="tealDivider">$200</td>
                </tr>
                
                <tr>
                  <td className="whiteDivider">Tier 6</td>
                  <td className="tealDivider">2500</td>
                  <td className="tealDivider">$500</td>
                </tr>
                
                <tr>
                  <td className="whiteDivider">Tier 7</td>
                  <td className="tealDivider">5000</td>
                  <td className="tealDivider">$1000</td>
                </tr>
                
                <tr>
                  <td className="whiteDivider">Tier 8</td>
                  <td className="tealDivider">8000</td>
                  <td className="tealDivider">$1500</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UsagePopUp
