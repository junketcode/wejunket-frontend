import React, { useState, useEffect } from "react"
import Carousel from 'react-alice-carousel'
import "react-alice-carousel/lib/scss/alice-carousel.scss";


 
const JunketImgSlider = ({ images }) => {
  const renderImages = () => images.map((image, i) => <img src={image} key={i} />)

  return (
    <div className="junket-image-slider pl-4">
      <Carousel
        responsive={{0: {items:1}}}
        autoPlayInterval={10000}
        autoPlay
        buttonsDisabled
        dotsDisabled={images.length <= 1}
      >
        {renderImages()}
      </Carousel>
    </div>
  )
}

export default JunketImgSlider