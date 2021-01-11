import Link from "next/link"
import { totalmem } from "os"
import React, { useState } from "react"


const JunketsSliderItem = ({ mainImage, title, city, slug }) => {
  const urlCity = city.replace(/ /g, "_").toLowerCase()
  const urlTitle = title.replace(/-/g, "").replace(/  /g, "").replace(/ /g, "_").toLowerCase()

  return (
    <Link href={`/junkets/${urlCity}/${urlTitle}/${slug}`}>
      <div className="junkets-slider-item">
        <img src={mainImage} alt={title} />
        <div className="title">
          <div className="title-text">
            {title} <br />
            <span>LEARN MORE</span>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default JunketsSliderItem