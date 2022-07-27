import React from 'react';
import Navbar from './Navbar.js'

function Contact(){
  return (
     <div>
        <Navbar/>
        <div className="contact-container">
          <div className="left-col">
          </div>
          <div className="right-col">
            <div className="theme-switch-wrapper">
            <label className="theme-switch" for="checkbox">
                <input type="checkbox" id="checkbox" />
            </label>
          </div>
        
          <h4 className='us'>Contact Me</h4>
        
        <form id="contact-form" method="post">
          <label for="name">Full name</label>
      <input type="text" id="name" name="name" placeholder="Your Full Name" required />
          <label for="email">Email Address</label>
      <input type="email" id="email" name="email" placeholder="Your Email Address" required />
          <label for="message">Message</label>
      <textarea rows="6" placeholder="Your Message" id="message" name="message" required></textarea>
          <button type="submit" id="submit" name="submit">Send</button>
      
        </form>
        <div id="error"></div>
        <div id="success-msg"></div>
      </div>
    </div>
     </div>
  );
} 

export default Contact;