import * as React from "react"
import clsx from 'clsx'
import YouTubePlayer from "react-player/lib/players/YouTube"

interface VideoSectionProps{
  className?: String
}

const TourVideoSection = (props: VideoSectionProps) => {

  const { className } = props
  return (
    <div className={clsx(className)}>
      <div className="video-container">
        <YouTubePlayer
          url={"https://www.youtube.com/watch?v=dd4-vm1OqYY"}
          playing={false}
          preload=""
          width="100%"
          height="100%"
          className="react-player"
        />

        
          {/* <img
            className="border border-transparent rounded-lg bg-transparent p-4 wh-100"
            // alt={`${tour.title} Featured Image`}
            src={main_image}
          /> */}
      </div>
    </div>
  )
}

export default TourVideoSection