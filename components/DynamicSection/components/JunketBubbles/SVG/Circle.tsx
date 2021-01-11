import * as React from "react"

const Circle = ({cy, cx, r, fill, stroke}: any) => {
  return (
        <g
          stroke={stroke}
          stroke-width="1"
          fill="none"
          fillRule="evenodd"
        >
          <circle stroke={stroke} fill={fill} cx={cx} cy={cy} r={r} />
        </g>
  )
}

export default Circle
