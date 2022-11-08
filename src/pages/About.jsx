import React from 'react'
import { Footer, Navbar } from '../components'

const About = () => {
  return (
    <div className='about-section'>
      <Navbar/>
      <hr className='white-line'/>
      <h1 className='about section-heading'>#1 Real Estate selling company in Texas</h1>
      <p className='about-section-paragraph'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet odio totam animi. Asperiores magni suscipit sapiente saepe consequatur porro libero nulla nam assumenda! Voluptatem eligendi quibusdam minus. </p>
      <div className='about-hero'>
        <button className='about-button'>View Properties</button>
        <button className='about-button-2'>Learn More</button>
      
        <div className="pill-1"/>
        <div className="pill-2" />
        <div className="pill-3" />
      
      </div>
      <hr className='black-line' />
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
      <hr className="black-line" />
      <h1>Meet the Team</h1>
      <div className="row">
        <div className="column">
          <div className='circle' />
          <p>Name</p>
          <p>Position</p>
          <p>Experience</p>
        </div>
        <div className="column">
          <div className='circle'/>
          <p>Name</p>
          <p>Position</p>
          <p>Experience</p>
        </div>
      </div>
      <div className="row">
        <div className="column">
          <div className='circle' />
          <p>Name</p>
          <p>Position</p>
          <p>Experience</p>
        </div>
        <div className="column">
          <div className='circle'/>
          <p>Name</p>
          <p>Position</p>
          <p>Experience</p>
        </div>
      </div>
      <div className="row">
        
        <div className="column">
        <a href="/Profile">
          <div className='circle' />
          <p>Name</p>
          <p>Position</p>
          <p>Experience</p>
          </a>
        </div>
        
        <div className="column">
          <div className='circle'/>
          <p>Name</p>
          <p>Position</p>
          <p>Experience</p>
        </div>
      </div>
      <div className="row">
        <div className="column">
          <div className='circle' />
          <p>Name</p>
          <p>Position</p>
          <p>Experience</p>
        </div>
        <div className="column">
          <div className='circle'/>
          <p>Name</p>
          <p>Position</p>
          <p>Experience</p>
        </div>
      </div>
      <hr />
      <div className='team-form-bg'>
        <h1>Join Our Team</h1>
        <form className="team-form">
          <label for="name">Name:</label><input type="text" placeholder='John Smith' id="name" />
          <label for="email">Email:</label><input  type="text" placeholder='JohnSmith@example.com' id="email" />
          <label for="message">Message:</label><textarea name="message" id="message" type="text" placeholder='Type Message Here...'></textarea>
          <button type='submit'>Submit Info</button>
        </form>
        
      </div>
      <Footer />
    </div>
  )
}

export default About