import React, { useState } from 'react'
import Router from 'next/router'



const JunketSearchBar = () => {
  const [searchKey, setSearchkey] = useState(null)

  const handleSearch = e => {
    if(!!e.keyCode && e.keyCode !== 13) 
      return setSearchkey(e.target.value)

    if(!searchKey)
      return
    
    return Router.push(`/junkets?search=${searchKey}`)
  }

  return (
    <div className="junket-search-bar">
      <div className="search-bar-title">Search by Tour Name or Location</div>
      <input className="search-bar-input pl-4" type="text" name="q" onKeyUp={handleSearch} />
      <button className="search-bar-btn" type="button" onClick={handleSearch}>GO!</button>
    </div>
  )
}

export default JunketSearchBar