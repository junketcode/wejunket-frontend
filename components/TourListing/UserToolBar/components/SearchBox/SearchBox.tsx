import * as React from "react"
import { useState } from "react"

const SearchBox = () => {
  const [searchText, setSearchText] = useState("")
  const handleValueChange = event => {
    const { value } = event.target
    setSearchText(value)
  }

  const name = "search-tour";

  return (
    <input
      className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-800"
      id={name}
      name={name}
      type="text"
      placeholder="Search"
      onChange={handleValueChange}
      key={name}
      autoComplete={name}
      value={searchText}
    />
  )
}

export default SearchBox
