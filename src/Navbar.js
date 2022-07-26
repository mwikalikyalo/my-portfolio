import React from 'react';
import './App.css';

function Navbar() {
  return (
    <div className="App">
       <nav className="nav" style={{backgroundColor: '#023047'}} >
        <ul className="nav justify-content-end navbar">
          <li className="nav-item">
            <a className="nav-link" 
            aria-current="page" href="/" 
            style={{color: "#ffb703", fontWeight: "bolder"}}>
              Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/about" 
            style={{color: "#ffb703", fontWeight: "bolder"}}>
              About</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/projects" 
            style={{color: "#ffb703", fontWeight: "bolder"}}>
              Projects</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/contact" 
            style={{color: "#ffb703", fontWeight: "bolder"}}>
              Contact</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;