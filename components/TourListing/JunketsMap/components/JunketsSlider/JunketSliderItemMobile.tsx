import Link from "next/link"
import { totalmem } from "os"
import React, { useState } from "react"


const JunketsSliderItem = ({ mainImage, title, city, slug }) => {
  const urlCity = city.replace(/ /g, "_").toLowerCase()
  const urlTitle = title.replace(/-/g, "").replace(/  /g, "").replace(/ /g, "_").toLowerCase()

  return (
    <div className="junkets-slider-item-mobile">
      <img className="item-image" src={mainImage} alt={title} />
      <Link href={`/junkets/${urlCity}/${urlTitle}/${slug}`}>
        <div className="title">
          <span>LET'S GO</span>
          <img src={require('../../../../../public/img/pages/junket/go.png')} />
        </div>
      </Link>
    </div>
  )
}

export default JunketsSliderItem