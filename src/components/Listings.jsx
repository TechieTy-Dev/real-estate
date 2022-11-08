import React from 'react'
import Cards from './Cards'

const Listings = () => {
  return (
    <section className="listings-section">
      <div className='listing-heading'>
        <hr className="top-listing-line" />
        <h1 className="listing-title">The Fortune Group</h1>
        <div className="listing-subheading"><hr className=" listing-bottom-line"/> <p className='yellow'>Real Estate</p> </div>
        <button className='listings-button'>Learn More</button>
        <hr className="button-line" />
      </div>
      <div className="listing-content">
      <h1 className="listing-market-title"><span className="yellow"> Hot </span> Markets <hr className="market-line" /></h1> 

      <div className="city-card-group">
<div className="city-card dallas">
<div className="glass"><p>Dallas, TX</p></div>
</div>
<div className="city-card nyc">
<div className="glass"><p>New York, NY</p></div>
</div>
  <div className="city-card miami">
<div className="glass"><p>Miami, FL</p></div>
</div>
  <div className="city-card phoenix">
<div className="glass"><p>Phoenix, AZ</p></div>
</div>
<div className="city-card seattle">
<div className="glass"><p>Seattle, WA</p></div>
</div>
  <div className="city-card nashville">
<div className="glass"><p>Nashville, TN</p></div>
</div>
</div>
      
      <ul className="columns">
        <li>Dallas, TX</li>
        <li>Miami, FL</li>
        <li>Seattle, WA</li>
        <li>New York, NY</li>
        <li>Austin, TX</li>
        <li>Phoenix, AZ</li>
      </ul>
      </div>
      <h1 className="featured-heading"><span className="yellow">Top </span>Listings:</h1>
      <div className='card-group'>
        <Cards />
      </div>
     
    </section>
  )
}

export default Listings