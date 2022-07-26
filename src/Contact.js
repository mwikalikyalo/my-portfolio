import React from 'react';
import Navbar from './Navbar';
import './App.css';


function Home() {
  return (
    <div className="App">
      <Navbar />
      <div className="App-header intro">
          <h3 className="text-center">Winnie Mwikali's Portfolio</h3>
      </div>
    </div>
  );
}

export default Home;