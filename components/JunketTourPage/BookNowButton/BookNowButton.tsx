import React from 'react'



const BookNowBtn = ({ pricingType }) => {
  return (
    <button 
      type="button"
      className="book-btn"
    >{`${pricingType === 'free' ? 'DOWNLOAD' : 'BOOK NOW'}`}</button>
  )
}

export default BookNowBtn