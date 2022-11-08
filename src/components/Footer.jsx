import React from 'react'

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-content'>
       <div className='footer-address'><p>9381 Main St, Dallas TX, 72727</p>
       </div>
       <div className='footer-logo'><svg width="34" height="41" viewBox="0 0 34 41" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1 36V12.9086L17 2L33 12.9086V36H26.1915" stroke="white" stroke-width="2"/>
<rect x="5" y="31" width="21" height="2" fill="white"/>
<rect x="4" y="35" width="20" height="2" fill="white"/>
<rect x="2" y="39" width="19" height="2" fill="white"/>
</svg>
</div>
       <div className='footer-links'><ul>
          <li>
            <a href="/"><p>Home</p></a>
          </li>
          <li>
            <a href="/About"><p>Properties</p></a>
          </li>
          <li>
            <a href="/Contact"><p>About</p></a>
          </li>
          <li>
            <a href="/Contact"><p>Contact</p></a>
          </li>
        </ul></div>
      </div>
    </div>
  )
}

export default Footer