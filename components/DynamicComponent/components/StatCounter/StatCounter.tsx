import * as React from "react"
import { ICounterComponent } from "../../../../interfaces/page-definitions.types"

const StatCounter = ({ counter }: ICounterComponent) => {
  return (
    <div className="flex flex-row justify-center md:justify-around">
      {counter.map(item => (
        <div key={item.key} className="flex flex-col items-center w-40 h-40">
          <div
            style={{ borderColor: item.borderColor }}
            className="border-4 rounded-full w-24 h-24 flex justify-center items-center"
          >
            <h3 className="text-2xl font-bold text-gray-800">{item.count}</h3>
          </div>
          <h3 className="text-xl font-bold text-gray-800">{item.key}</h3>
        </div>
      ))}
    </div>
  )
}

export default StatCounter
