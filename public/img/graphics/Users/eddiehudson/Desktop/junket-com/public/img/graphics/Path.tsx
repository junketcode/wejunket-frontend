import React from "react"

const SvgPath = props => (
  <svg width={170} height={152} {...props}>
    <defs>
      <linearGradient x1="0%" y1="50%" x2="100%" y2="50%" id="a">
        <stop stopColor="#A07EA5" offset="0%" />
        <stop stopColor="#5ACABE" offset="100%" />
      </linearGradient>
    </defs>
    <path
      fill="url(#a)"
      d="M.042.738l169.172 84.255v24.723l-84.586 41.39h-57.17l110.774-53.747L.042 29.12z"
      fillRule="evenodd"
    />
  </svg>
)

export default SvgPath
