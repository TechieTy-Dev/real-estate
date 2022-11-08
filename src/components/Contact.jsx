import React from 'react'

const Contact = () => {
  return (
    <div className="contact-bg">
      <div className="form-container">
      <h1 className="transparent"><span className="yellow">Contact </span>Us</h1>
      <div className='form-center'>
      <form className="contact-form">
        <label for="Name">Name:</label><input type="text" placeholder='John Smith' name='Name' id="Name"/>
        <label>Email:</label><input type="email" placeholder='JohnSmith@example.com' id="Email" name='Email' />
        <label for="Message">Message:</label><textarea name="Message" id="Message" placeholder='Message Here' ></textarea>
        <button type='submit'>Submit Message</button>
      </form>
      </div>
      </div>
    </div>
  )
}

export default Contact