import * as React from 'react'



const SliderButton = ({ next, prev }) => {
  return (
    <>
      <button className="prev" onClick={prev}></button>
      <button className="next" onClick={next}></button>
    </>
  )
}

export default SliderButton