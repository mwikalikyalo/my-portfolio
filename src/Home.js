import React from 'react';
import Navbar from './Navbar';
import './App.css';
import mypicture from './images/mypicture.jpg'

function Home() {
  return (
    <div className="App">
      <Navbar />
      <div className="App-header intro">
          <img src={mypicture} className="mypicture img-fluid"/>
          <h3 className="text-center">Winnie Mwikali's Portfolio</h3>
      </div>
    </div>
  );
}

export default Home;