import React from 'react'
import { useState } from 'react'

const Navbar = () => {
const [isNavExpanded, setIsNavExpanded] = useState(false);
  return (
    <nav className="navigation">
      <a href="/" className="logo"><svg width="34" height="41" viewBox="0 0 34 41" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1 36V12.9086L17 2L33 12.9086V36H26.1915" stroke="white" stroke-width="2"/>
<rect x="5" y="31" width="21" height="2" fill="white"/>
<rect x="4" y="35" width="20" height="2" fill="white"/>
<rect x="2" y="39" width="19" height="2" fill="white"/>
</svg>
</a>
      <button className="hamburger" onClick={() => {
        setIsNavExpanded(!isNavExpanded);
      }}>
      <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="white"
        >
          <path
            fillRule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      <div
        className={isNavExpanded ? "navigation-menu expanded" : "navigation-menu"}>
        <ul>
          <li>
            <a href="/"><p>Home</p></a>
          </li>
          <div class="vertical-line"></div> 
          <li>
            <a href="/Properties"><p>Properties</p></a>
          </li>
          <div class="vertical-line"></div> 
          <li>
            <a href="/About"><p>Our Story</p></a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar