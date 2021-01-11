import React from 'react'



const JunketIntroAudio = ({ src }) => {
  return (
    <div className="junket-intro-audio-container">
      <div className="img-container">
        <img src={require("../../../public/img/v2/sufering1.svg")} alt="dotted wavy path" />
      </div>
      <div className="audio-container">
        <audio
          src={src}
          controls
          className="w-full mr-4"
        />
      </div>
    </div>
  )
}

export default JunketIntroAudio