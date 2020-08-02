import React,{ Component } from 'react';
import './css/About.css';

class About extends Component {
render() {
  return (

     <div class="component-container">
       <div class="row">
           <h4 class="section-title">Best Traits</h4>
       </div>
        <div class="row">
          <div data-aos="slide-right" class="col-12 col-sm-8 col-md-6 col-lg-4">
            <div class="card border-0">
              <img class="card-img custom-card-image" src='/images/innovate.jpg' alt="Bologna"></img>
              <div class="card-body">
                <h4 class="card-title about-heading">Innovative</h4>
                <p class="card-text">Gary has worked on innovative projects over the years</p>
              
              </div>
            </div>
          </div>

          <div data-aos="zoom-in" class="col-12 col-sm-8 col-md-6 col-lg-4">
            <div class="card border-0">
              <img class="card-img custom-card-image" src='/images/consistent.jpg' alt="Bologna"></img>
              <div class="card-body">
                <h4 class="card-title about-heading">Consistency</h4>
                <p class="card-text">Gary has consistently won numerous awards for achievements related to programming.</p>
              
              </div>
            </div>
          </div>


          <div data-aos="slide-left" class="col-12 col-sm-8 col-md-6 col-lg-4">
            <div class="card border-0">
              <img class="card-img custom-card-image" src='/images/inspire.jpg' alt="Bologna"></img>
              <div class="card-body">
                <h4 class="card-title about-heading">Inspirational</h4>
                <p class="card-text">Gary has inspired many upcoming youths who are interested in I.T by mentoring them.</p>
              
              </div>

            </div>
          </div>

        </div>
   </div>
    
  );
}
}

export default About;