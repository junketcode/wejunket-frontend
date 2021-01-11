import React, { useEffect, useState } from "react"
import './Paywall.scss'

const Paywall = ({ isOpen , junketId ,showBookNowDialog}) => {
  function getBookNowButton() {
    if (!junketId) return '';
    return <button
        className="wejunketbookWidgetOpenModal"
        data-id={junketId} onClick={() => {
        showBookNowDialog(junketId)
    }}
    >
        Book now
    </button>;
  }
  return (
    <div className={`paywall ${isOpen && 'active'}`}>
      <div className="paywall-content">
        <div className="paywall-description">
          Please Book to continue your adventure
        </div>
     {/*   <button type="button">BOOK NOW</button>*/}
        {getBookNowButton()}
      </div>
    </div>
  )
}

export default Paywall
