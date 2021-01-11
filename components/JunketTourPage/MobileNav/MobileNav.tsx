import React from 'react'



const MobileNav =  ({ activeNav, setActiveNav }) => {
  return (
    <div className="mobile-nav">
      <div 
        className={`mobile-nav-item ${activeNav === 1 && 'active'}`}
        onClick={() => setActiveNav(1)}
      >
        Tour
      </div>
      <div 
        className={`mobile-nav-item ${activeNav === 2 && 'active'}`}
        onClick={() => setActiveNav(2)}
      >
        Map
      </div>
      <div 
        className={`mobile-nav-item ${activeNav === 3 && 'active'}`}
        onClick={() => setActiveNav(3)}
      >
        Stops
      </div>
    </div>
  )
}

export default MobileNav