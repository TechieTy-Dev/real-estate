import React from 'react'
import { Footer, Navbar } from '../components'
import Cards from '../components/Cards'

const Properties = () => {
  return (
    <div className="bg">
      <Navbar/>
      <div className='search-bar-container'>
        <form>  <input id="mySearch" type="text" placeholder="Search.."/><button className='search-btn'><svg width="24" height="22" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.65937 9.01367L6.61602 5.97031C7.08828 5.35977 7.34375 4.61328 7.34375 3.82812C7.34375 2.88828 6.97695 2.00703 6.31367 1.34258C5.65039 0.678125 4.7668 0.3125 3.82812 0.3125C2.88945 0.3125 2.00586 0.679297 1.34258 1.34258C0.678125 2.00586 0.3125 2.88828 0.3125 3.82812C0.3125 4.7668 0.679297 5.65039 1.34258 6.31367C2.00586 6.97812 2.88828 7.34375 3.82812 7.34375C4.61328 7.34375 5.35859 7.08828 5.96914 6.61719L9.0125 9.65937C9.02142 9.6683 9.03202 9.67539 9.04368 9.68022C9.05534 9.68505 9.06785 9.68754 9.08047 9.68754C9.09309 9.68754 9.10559 9.68505 9.11726 9.68022C9.12892 9.67539 9.13951 9.6683 9.14844 9.65937L9.65937 9.14961C9.6683 9.14069 9.67539 9.13009 9.68022 9.11843C9.68505 9.10676 9.68754 9.09426 9.68754 9.08164C9.68754 9.06902 9.68505 9.05652 9.68022 9.04485C9.67539 9.03319 9.6683 9.0226 9.65937 9.01367ZM5.68438 5.68438C5.1875 6.18008 4.52891 6.45312 3.82812 6.45312C3.12734 6.45312 2.46875 6.18008 1.97188 5.68438C1.47617 5.1875 1.20312 4.52891 1.20312 3.82812C1.20312 3.12734 1.47617 2.46758 1.97188 1.97188C2.46875 1.47617 3.12734 1.20312 3.82812 1.20312C4.52891 1.20312 5.18867 1.475 5.68438 1.97188C6.18008 2.46875 6.45312 3.12734 6.45312 3.82812C6.45312 4.52891 6.18008 5.18867 5.68438 5.68438Z" fill="white"/>
</svg>
</button></form>

      </div>
      
      <div className="web-search-box">
  <h1 className='web-search-heading'>Search Properties</h1>
  <hr className="top-line" />
  <form className="web-search-form">
    <input className="web-search-bar" placeholder="Search ZIP Code, City, State" type="text" />
    <div class="top-lists">
    <label for="list-price">Price:</label>
<select name="list-price" id="list-price">
    <option value="price-range-1">$150K-300K</option>
  <option value="price-range-2">$300K-450K</option>
  <option value="price-range-3">$450k-600k</option>
  <option value="price-range-4">$600k-800K</option>
  <option value="price-range-5">$1M+</option>
</select>
          <label for="neighborhood">Neighborhood:</label>
<select name="neighborhoods" id="neighborhoods">
    <option value="north">North</option>
  <option value="east">East</option>
  <option value="south">South</option>
  <option value="west">West</option>
      </select>
            <label for="home-types">Home Type:</label>
<select name="home-types" id="home-types">
   <option value="houses">House</option>
  <option value="penthouses">Penthouse</option>
  <option value="condos">Condo</option>
  <option value="villas">Villa</option>
</select>
      </div>
    <div class="bottom-lists">
       <label for="beds">Beds:</label>
<select name="beds" id="beds">
     <option value="one">1</option>
  <option value="two">2</option>
  <option value="three">3</option>
  <option value="four">4</option>
    <option value="five-more">5+</option>
</select>
          <label for="baths">Baths:</label>
<select name="baths" id="baths">
    <option value="one">1</option>
  <option value="two">2</option>
  <option value="three">3</option>
  <option value="four">4</option>
    <option value="five-plus">5+</option>
      </select>
         <label for="square-footage">Sqft:</label>
<select name="square-footage" id="square-footage">
    <option value="under-1k">0-999</option>
  <option value="1k-2k">1K-2K</option>
  <option value="2k-3k">2K-3K</option>
  <option value="3k-4k">3K-4K</option>
   <option value="4k-plus">4K+</option>
      </select>
    </div>
    <div className="button-group">
    <hr className="search-button-line" />
    <button className="web-search-button">Search Listings</button>
    </div>
  </form>
</div>
      <h1 className="props-heading"><span className="yellow">Top </span>Properties:</h1>
      
      <h5 className="props-subheading">4,601 results</h5>
      <section className='grid-section'>
      <hr className="grid-top-line" />
<h1 className="grid-title">Feature Listings</h1>
 <hr className="grid-bottom-line" />

<div className="grid-wrapper">
<div className="props-grid">
  <div className="container one">
  <img src="https://www.gannett-cdn.com/-mm-/31d5bc3c4b51f28c474e70ba2abfda0f9c3bde6f/c=0-122-4000-2382/local/-/media/2015/05/16/DetroitFreePress/DetroitFreePress/635674002117459321-AP-Dimming-New-York-NYJJ201.jpg" alt="one" />
    <div className="overlay">
      <h1>3365 W Crowfield Road</h1>
      <p>Phoenix, AZ</p>
    </div>
  </div>
   <div className="container two">
  <img src="https://www.gannett-cdn.com/-mm-/31d5bc3c4b51f28c474e70ba2abfda0f9c3bde6f/c=0-122-4000-2382/local/-/media/2015/05/16/DetroitFreePress/DetroitFreePress/635674002117459321-AP-Dimming-New-York-NYJJ201.jpg" alt="one" />
    <div className="overlay">
      <h1>9090 E Cordova St. </h1>
      <p>Miami, FL</p>
    </div>
  </div>
   <div className="container three">
  <img src="https://www.gannett-cdn.com/-mm-/31d5bc3c4b51f28c474e70ba2abfda0f9c3bde6f/c=0-122-4000-2382/local/-/media/2015/05/16/DetroitFreePress/DetroitFreePress/635674002117459321-AP-Dimming-New-York-NYJJ201.jpg" alt="one" />
    <div className="overlay">
      <h1>4201 E Madison St.</h1>
      <p>Seattle, WA </p>
    </div>
  </div>
   <div className="container four">
  <img src="https://www.gannett-cdn.com/-mm-/31d5bc3c4b51f28c474e70ba2abfda0f9c3bde6f/c=0-122-4000-2382/local/-/media/2015/05/16/DetroitFreePress/DetroitFreePress/635674002117459321-AP-Dimming-New-York-NYJJ201.jpg" alt="one" />
    <div className="overlay">
      <h1>2126 Abbott Martin Rd.</h1>
      <p>Nashville, TN</p>
    </div>
  </div>
   <div className="container five">
  <img src="https://www.gannett-cdn.com/-mm-/31d5bc3c4b51f28c474e70ba2abfda0f9c3bde6f/c=0-122-4000-2382/local/-/media/2015/05/16/DetroitFreePress/DetroitFreePress/635674002117459321-AP-Dimming-New-York-NYJJ201.jpg" alt="one" />
    <div className="overlay">
      <h1>3518 Armstrong Ave</h1>
      <p>Highland Park, TX</p>
    </div>
  </div>
   <div className="container six">
  <img src="https://www.gannett-cdn.com/-mm-/31d5bc3c4b51f28c474e70ba2abfda0f9c3bde6f/c=0-122-4000-2382/local/-/media/2015/05/16/DetroitFreePress/DetroitFreePress/635674002117459321-AP-Dimming-New-York-NYJJ201.jpg" alt="one" />
    <div className="overlay">
      <h1>40 Broad St.</h1>
      <p>NYC, NY</p>
    </div>
  </div>
   <div className="container seven">
  <img src="https://www.gannett-cdn.com/-mm-/31d5bc3c4b51f28c474e70ba2abfda0f9c3bde6f/c=0-122-4000-2382/local/-/media/2015/05/16/DetroitFreePress/DetroitFreePress/635674002117459321-AP-Dimming-New-York-NYJJ201.jpg" alt="one" />
    <div className="overlay">
      <h1>3611 Congress Ave</h1>
      <p>Dallas, TX</p>
     </div>
  </div>
       <div className="container eight">
  <img src="https://www.gannett-cdn.com/-mm-/31d5bc3c4b51f28c474e70ba2abfda0f9c3bde6f/c=0-122-4000-2382/local/-/media/2015/05/16/DetroitFreePress/DetroitFreePress/635674002117459321-AP-Dimming-New-York-NYJJ201.jpg" alt="one" />
    <div className="overlay">
      <h1>650 NE 2nd Ave</h1>
      <p>Miami, FL  </p>
    </div>
  </div>
  <div className="container nine">
  <img src="https://www.gannett-cdn.com/-mm-/31d5bc3c4b51f28c474e70ba2abfda0f9c3bde6f/c=0-122-4000-2382/local/-/media/2015/05/16/DetroitFreePress/DetroitFreePress/635674002117459321-AP-Dimming-New-York-NYJJ201.jpg" alt="one" />
    <div className="overlay">
      <h1>650 NE 2nd Ave</h1>
      <p>Miami, FL  </p>
    </div>
  </div>
</div>
</div>
      </section>
      <div className='props-container'>
      <Cards />
      <Cards />
      </div>
      <Footer/>
    </div>
   
  )
}

export default Properties