import React from 'react';
import Navbar from './Navbar';
 
function Projects(){
    return(
      <div>
        <Navbar />
        <div className='container-fluid body'> 
          <div className="header">
            <h1>My Projects.</h1>
            <p>These are the projects I have done so far.</p>
          </div>
          <div className="row1-container">
            <div className="box box-down cyan">
              <h2>Awards</h2>
              <p>A website where users can post their projects and they can be rated in terms of design, 
                content and userbility</p>
            </div>

            <div className="box red">
              <h2>Photo</h2>
              <p>This is a Django gallery project which shows different images of different locations and categories.</p>
            </div>

            <div className="box box-down blue">
              <h2>Password Locker</h2>
              <p>This is a terminal based Python application that generates and manages 
                accounts and passwords for a user's various accounts.</p>
            </div>
          </div>
        </div>
      </div>
        
    );
}

export default Projects;