import React, { useState } from "react"
import Carousel from 'react-alice-carousel'
import "react-alice-carousel/lib/scss/alice-carousel.scss";
import SliderButton from './SliderButton'



const PhoneSlider = () => {
  const [sliderRef, setSliderRef] = useState(null)

  return (
    <div className="slider">
      <Carousel
        responsive={{0: {items:1}}}
        autoPlayInterval={10000}
        autoPlay
        dotsDisabled
        buttonsDisabled
        ref={el => setSliderRef(el)}
      >
        <img src={require("../../../public/img/pages/whatisjunk/carousel/carousel1.png")} alt="phone carousel" className="started-phone"/>
        <img src={require("../../../public/img/pages/whatisjunk/carousel/carousel2.png")} alt="phone carousel" className="started-phone"/>
        <img src={require("../../../public/img/pages/whatisjunk/carousel/carousel3.png")} alt="phone carousel" className="started-phone"/>
        <img src={require("../../../public/img/pages/whatisjunk/carousel/carousel4.png")} alt="phone carousel" className="started-phone"/>
        <img src={require("../../../public/img/pages/whatisjunk/carousel/carousel5.png")} alt="phone carousel" className="started-phone"/>
        <img src={require("../../../public/img/pages/whatisjunk/carousel/carousel6.png")} alt="phone carousel" className="started-phone"/>
        <img src={require("../../../public/img/pages/whatisjunk/carousel/carousel7.png")} alt="phone carousel" className="started-phone"/>
        <img src={require("../../../public/img/pages/whatisjunk/carousel/carousel8.png")} alt="phone carousel" className="started-phone"/>
        <img src={require("../../../public/img/pages/whatisjunk/carousel/carousel9.png")} alt="phone carousel" className="started-phone"/>
      </Carousel>
      { sliderRef && <SliderButton next={sliderRef.slideNext} prev={sliderRef.slidePrev} /> }
    </div>
  )
}

export default PhoneSlider