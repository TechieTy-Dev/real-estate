import React from 'react'
import Navbar from './Navbar'
import Listings from './Listings'
import Footer from './Footer'
import Contact from './Contact'
import process from '../assets/bh.jpg'


const Hero = () => {

  return (
    <div id='bg'>
      <Navbar />
      <Listings />
      <section className='grid-section'>
      <hr className="grid-top-line" />
<h1 className="grid-title">Featured Listings</h1>
 <hr className="grid-bottom-line" />

<div className="grid-wrapper">
<div className="grid">
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
</div>
</div>
      </section>
      
      <section className="stats-section">
        <div className="stats-subheading">
        <p>WHY <span className="yellow">YOU</span> SHOULD</p>
        <hr className="top-subheading-line"/>
        </div>
        <h1 className='stats-heading'>WORK WITH US</h1>
        <div className="stats-subheading-bottom">
        <hr className='bottom-subheading-line' />
        <p className="yellow">OUR SUCCESS</p>
        </div>

        <div className="stats-container">
          <div className="stats-box">
            <h1 className="stats-box-title">Number of Homes Sold</h1>
          <p className="stats-box-stat"><span className='yellow'>2,000+</span> Properties</p></div>
          <div className="stats-box"><h1 className="stats-box-title">Clients We Have Represented</h1>
          <p className="stats-box-stat"><span className="yellow">500+</span> Clients</p></div>
          <div className="stats-box"><h1 className="stats-box-title">Total Value Of Homes Sold</h1>
          <p className="stats-box-stat"><span className="yellow">$1.2B</span> US Dollars</p></div>
        </div>
      </section>
      <section className="testimonial-section">
        <hr className="testimonial-top-line" />
        <h1 className='testimonial-title'>WHAT OUR CLIENTS ARE <span className="yellow">SAYING</span></h1>
        <div className="testimonial-group">
          <div className="testimonial-box">
            <h1 className='testimonials-heading'>Jake S.</h1>
            <p className='testimonials-content'>"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam accusantium optio suscipit libero blanditiis nesciunt illo modi unde neque molestias esse cupiditate nostrum et, debitis dolore nisi voluptatibus est. Deleniti!"</p>
            <div className="bottom-box-details">AUSTIN METROPLEX AREA</div>
          </div>
          <div className="testimonial-box">
            <h1 className='testimonials-heading'>Sally B.</h1>
            <p className='testimonials-content-white'>"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam accusantium optio suscipit libero blanditiis nesciunt illo modi unde neque molestias esse cupiditate nostrum et, debitis dolore nisi voluptatibus est. Deleniti!"</p>
            <div className="bottom-box-details">MIAMI METROPLEX AREA</div>
          </div>
          <div className="testimonial-box">
            <h1 className='testimonials-heading'>Bruce A.</h1>
            <p className='testimonials-content'>"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam accusantium optio suscipit libero blanditiis nesciunt illo modi unde neque molestias esse cupiditate nostrum et, debitis dolore nisi voluptatibus est. Deleniti!"</p>
            <div className="bottom-box-details">NYC METROPLEX AREA</div>
          </div>
        </div>
      </section>
      <section className="process-section">
        <h1 className="process-heading"><span className='yellow'>Our</span> Process</h1>
        <div className="layer-group">
<div className="layer-container">
<h1 className="layer">01</h1>
  <div className="layer-2">
    <p>Mollitia molestiae optio. Et maiores doloribus iste aperiam sed. Aut ut perspiciatis deleniti eos consectetur officiis quisquam voluptatem. Autem provident consectetur. Illo et omnis est voluptatum asperiores. </p>
  </div>
  <img className="layer-3" src={process} alt="in" />
</div>
  
  <div className="layer-container-2">
<h1 className="second-layer">02</h1>
  <div className="second-layer-2">
    <p>Mollitia molestiae optio. Et maiores doloribus iste aperiam sed. Aut ut perspiciatis deleniti eos consectetur officiis quisquam voluptatem. Autem provident consectetur. Illo et omnis est voluptatum asperiores. </p>
  </div>
  <img className="second-layer-3" src={process}  alt="in" />
</div>
  
  <div className="layer-container-3">
<h1 className="layer">03</h1>
  <div className="layer-2">
    <p>Mollitia molestiae optio. Et maiores doloribus iste aperiam sed. Aut ut perspiciatis deleniti eos consectetur officiis quisquam voluptatem. Autem provident consectetur. Illo et omnis est voluptatum asperiores. </p>
  </div>
  <img className="layer-3" src={process}  alt="in" />
</div>
</div>
      </section>
      <Contact />
      <Footer />
    </div>
  )
}

export default Hero