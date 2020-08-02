import React,{ Component } from 'react';
import './css/Projects.css';

class Projects extends Component {
render() {
  return (
    <div class="component-container">
       <div class="row">
           <h4 class="section-title">Top Projects</h4>
       </div>
        <div class="row">
          <div data-aos="slide-right" class="col-12 col-sm-8 col-md-6 col-lg-4">
            <div class="card border-0">
              <img class="card-img custom-card-image" src='/images/projects.jpg' alt="Bologna"></img>
              <div class="card-body">
                <h4 class="card-title about-heading">Project 1</h4>
                <p class="card-text">Info on project 1</p>
              
              </div>
            </div>
          </div>

          <div data-aos="zoom-in" class="col-12 col-sm-8 col-md-6 col-lg-4">
            <div class="card border-0">
              <img class="card-img custom-card-image" src='/images/projects.jpg' alt="Bologna"></img>
              <div class="card-body">
                <h4 class="card-title about-heading">Project 2</h4>
                <p class="card-text">Info on project 3</p>
              
              </div>
            </div>
          </div>


          <div data-aos="slide-left" class="col-12 col-sm-8 col-md-6 col-lg-4">
            <div class="card border-0">
              <img class="card-img custom-card-image" src='/images/projects.jpg' alt="Bologna"></img>
              <div class="card-body">
                <h4 class="card-title about-heading">Project 3</h4>
                <p class="card-text">Info on project 3</p>
              
              </div>

            </div>
          </div>

        </div>
   </div>
  );
}
}

export default Projects;