import React,{ Component } from 'react';
import './css/Achievements.css';

class Achievements extends Component {
render() {
  return (
    <div class="component-container">
    <div class="row">
        <h4 class="section-title">Achievements</h4>
    </div>
     <div class="row">
       <div data-aos="slide-right" class="col-12 col-sm-8 col-md-6 col-lg-4">
         <div class="card border-0">
           <img class="card-img custom-card-image" src='/images/chester.jpg' alt="Bologna"></img>
           <div class="card-body">
             <h4 class="card-title about-heading">Manchester High</h4>
             <p class="card-text">
              • Assistant lab technician
              • Vice president of the computer club
              • Vice president of the robotics and engineering club
              • Top cape computer science course work 2014 & 2015(project)
              • Leading a team to the PCJ national science competition
              </p>
           
           </div>
         </div>
       </div>

       <div data-aos="zoom-in" class="col-12 col-sm-8 col-md-6 col-lg-8">
         <div class="card border-0">
           <img class="card-img custom-card-image" src='/images/ncu.jpg' alt="Bologna"></img>
           <div class="card-body">
             <h4 class="card-title about-heading">Northern Caribbean University</h4>
             <p class="card-text">
              • Scholarship recipient (2019)
              • Honour roll awards-2017, 2018 and 2019
              • Top student in advance topics in info science (Mobile app emphasis with Flutter & Firebase)
              • Top student in the year group award (2019)
              • Top student award in Mobile Application Development (2019)
              • Top student award in web development (2018)
              • 2nd place in Data Set Go programming competition (2018)
              • Top student award in web design and implementation (2017) • Member of USM’s Jeopardy
              competition winning team (2017) 
           </p>
           
           </div>
         </div>
       </div>


     </div>
</div>
  );
}
}

export default Achievements;