import React from 'react';
import {Link} from 'react-router-dom';
import './App.css';

function Navbar() {
  return (
    <div className="App">
       <nav className="nav" style={{backgroundColor: '#023047'}} >
        <ul className="nav justify-content-end navbar">
          <li className="nav-item">
            <Link className="nav-link" 
            aria-current="page" to="/" 
            style={{color: "#ffb703", fontWeight: "bolder"}}>
              Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about" 
            style={{color: "#ffb703", fontWeight: "bolder"}}>
              About</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/projects" 
            style={{color: "#ffb703", fontWeight: "bolder"}}>
              Projects</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/contact" 
            style={{color: "#ffb703", fontWeight: "bolder"}}>
              Contact</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;