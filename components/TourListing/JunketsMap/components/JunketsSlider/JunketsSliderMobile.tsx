import React, { useState } from "react"
import Carousel from 'react-alice-carousel'
import "react-alice-carousel/lib/scss/alice-carousel.scss";
import JunketSliderItemMobile from './JunketSliderItemMobile'



const JunketsSlider = ({ junkets }) => {
  const [sliderRef, setSliderRef] = useState(null)

  const items = junkets.map(junket => (
    <JunketSliderItemMobile 
      title={junket.title}
      mainImage={junket.main_image}
      city={junket.location.city}
      slug={junket.id}
      key={junket.id}
    />
  ))

  return (
    <div className="junkets-slider">
      <Carousel
        responsive={{
          0: {items: 1} 
        }}
        autoPlayInterval={10000}
        autoPlay
        dotsDisabled
        buttonsDisabled
        ref={el => setSliderRef(el)}
      >
        {items}
      </Carousel>
    </div>
  )
}

export default JunketsSlider