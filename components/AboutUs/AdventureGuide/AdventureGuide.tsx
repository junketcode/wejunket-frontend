import * as React from "react"

import AdventureGuideVideo from './AdventureGuideVideo'
import "./AdventureGuide.scss"
import videos from './video.json'

const AdventureGuide = ({ openVideo }) => {

  const renderVideos = () => videos.map((video, i) => <AdventureGuideVideo {...video} openVideo={openVideo} key={i} />)

  return (
    <div className="adventure-guide container">
      <h3 className="grey-title">Adeventure Guide</h3>
      <img className="sufering" src={require("../../../public/img/v2/sufering1.svg")} alt="dotted wavy path"/>
      <div className="adventure-guide-videos container">
        <div className="videos-container">
          {renderVideos()}
        </div>
      </div>
    </div>
  )
}

export default AdventureGuide
