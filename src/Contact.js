import React from 'react';
import Navbar from './Navbar.js'

function Contact(){
  return (
        <div className='container-fluid'>
          <footer className="text-center text-lg-start">
            <div className="container d-flex justify-content-center py-5">
              <button type="button" className="btn btn-primary btn-lg btn-floating mx-2">
                <i className="fab fa-facebook-f"></i>
              </button>
              <button type="button" className="btn btn-primary btn-lg btn-floating mx-2">
                <i className="fab fa-youtube"></i>
              </button>
              <button type="button" className="btn btn-primary btn-lg btn-floating mx-2">
                <i className="fab fa-instagram"></i>
              </button>
              <button type="button" className="btn btn-primary btn-lg btn-floating mx-2">
                <i className="fab fa-twitter"></i>
              </button>
            </div>

            <div className="text-center text-white p-3">
              © 2022 Copyright:
            </div>
          </footer>
        </div>
  );
} 

export default Contact;