import * as React from "react"

const Arrow = _ => {
  const style = {
    backgroundImage: "linear-gradient(90deg, #A07EA5 0%, #5ACABE 100%)",
  }

  return (
    <div className="self-end -mb-10 lg:-mb-12 bottom-0 right-0">
      <svg width="170px" height="152px" viewBox="0 0 170 152" version="1.1">
        <defs>
          <linearGradient x1="0%" y1="50%" x2="100%" y2="50%" id="linearGradient-1">
            <stop stopColor="#A07EA5" offset="0%" />
            <stop stopColor="#5ACABE" offset="100%" />
          </linearGradient>
        </defs>
        <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
          <polygon id="Path" fill="url(#linearGradient-1)" points="0.0423145913 0.737929793 169.214386 84.9930512 169.214386 109.716425 84.6283501 151.10526 27.4571229 151.10526 138.232009 97.3585202 0.0423145913 29.1208979" />
        </g>
      </svg>
    </div>
  )
}

export default Arrow
