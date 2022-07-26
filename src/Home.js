import React from "react";
import mypicture from "./images/mypicture.jpg";
import Navbar from './Navbar'

function Home(){
  return(
       <div>
          <Navbar/>
          <div className="container-fluid">
            <div className="row">            
              <div className="d-flex justify-content-center start">
                <div className="align-self-center intro">
                  <img src={mypicture} className="mypicture img-fluid"/>
                  <h3 className="text-center">Winnie Mwikali's Portfolio</h3>
                </div>
              </div>
            </div>
          </div>
       </div>
  );
}

export default Home;