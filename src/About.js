import React from 'react';
import Navbar from './Navbar';
import './App.css';


function About(){
    return(       
        <div>
          <Navbar/>
          <div className="container-fluid about">
            <div className="bg-image"></div>
              <div className="bg-text">
                      <h1 style={{color: "#fca311"}}>About Me!</h1>
                      <hr />
                      <p className='text-center me'>I consider myself a 'forever student' and a quick learner. I am eager to both build on my academic foundations in 
                          Software Development with coding skills. I also have an educational background in Psychology and want to merge it 
                          with the latest technological advancement through continued coursework and professional development. I am interested 
                          in working with organizations that aim for building tech solutions, mentoring, training, and community building.</p>
              </div>
            </div>
        </div>
    );
}

export default About;