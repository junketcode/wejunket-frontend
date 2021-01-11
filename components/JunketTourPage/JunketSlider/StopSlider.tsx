import * as React from 'react'



export default ({ stops, current, setStop,  }) => {
  const currentIndex = stops.indexOf(current)

  const onNext = () => {
    if (!stops.length)
      return

    if (currentIndex === (stops.length - 1))
      return
    else {
      return setStop(stops[currentIndex + 1])
    }
  }

  const onPrev = () => {
    if (!stops.length)
      return

    if (currentIndex === 0) 
      return 
    else 
      return setStop(stops[currentIndex - 1])
  }

  return (
    <div className="stop-slider">
      <button className="prev" onClick={onPrev}>
        <img src={require('../../../public/img/pages/junket/prev.png')} />
        <div>Previous</div>
      </button>

      <div className="order-indicator">
        {`${currentIndex + 1}/${stops.length}`}
      </div>

      <button className="next" onClick={onNext}>
        <div>Next</div>
        <img src={require('../../../public/img/pages/junket/next.png')} />
      </button>
    </div>
  )
}
