import React, { useState } from "react"
import Carousel from 'react-alice-carousel'
import "react-alice-carousel/lib/scss/alice-carousel.scss";
import JunketSliderItem from './JunketSliderItem'
import JunketSliderBtn from './JunketSliderBtn'



const JunketsSlider = ({ junkets }) => {
  const [sliderRef, setSliderRef] = useState(null)

  const items = junkets.map(junket => (
    <JunketSliderItem 
      title={junket.title}
      mainImage={junket.main_image.path}
      city={junket.location.city}
      slug={junket.id}
      key={junket.id}
    />
  ))

  return (
    <div className="junkets-slider">
      <Carousel
        responsive={{
          1400: {items: 6},
          1200: {items: 5},
          1024: {items: 4},
          768: {items: 3},
          500: {items: 2} 
        }}
        autoPlayInterval={10000}
        autoPlay
        dotsDisabled
        buttonsDisabled
        ref={el => setSliderRef(el)}
      >
        {items}
      </Carousel>
      { sliderRef && <JunketSliderBtn next={sliderRef.slideNext} prev={sliderRef.slidePrev} /> }
    </div>
  )
}

export default JunketsSlider