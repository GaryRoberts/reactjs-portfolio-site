import React,{Component } from 'react';
import './css/Skills.css';


class Skills extends Component {
render() {

  return (
   <div class="component-container">
   <div class="row">
       <h4 class="section-title">Skills</h4>
   </div>
   <div class="row">
        <div data-aos="fade-left" class="col-sm-6">
            <div class="card border-0">
            <div class="card-body">
               <h3>Skill development</h3><br></br>
               <h5>How Gary develops his skills</h5>
               <p>Gary develops his skills by reading code from other developers and learning enough to solve new problems he encounters.</p><br></br>
               <h5>Mentors of Gary</h5>
               <p>Gary has been mentored by Chris Morgan who is one of the top freelance developers in Jamaica and Joel Dean who is a software engineer at WordPress</p><br></br>
               <h5>Communication skills</h5>
               <p>Gary has done public speaking on many occasions and is a motivational speaker to students at the high school he went to when he visits there once a year to encourage the computer science students</p><br></br>
          </div>
      </div>
     </div>
   
     <div data-aos="slide-left" class="col-sm-6">
            <div class="card border-0" data-aos="flip-down">
            <div class="card-body">
            <h3>Software dev skills</h3>
              <div class="progress-row">
                    <p>HTML</p>
                    <div class="progress">
                       <div class="progress-bar" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">100</div>
                    </div>
                    <p>CSS</p>
                    <div class="progress">
                       <div class="progress-bar" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100">90</div>
                    </div>
                    <p>JAVASCRIPT</p>
                    <div class="progress">
                       <div class="progress-bar" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">75</div>
                    </div>
                    <p>LARAVEL</p>
                    <div class="progress">
                       <div class="progress-bar" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100">90</div>
                    </div>
                    <p>DATABASE DESIGN</p>
                    <div class="progress">
                       <div class="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100">60</div>
                    </div>
                    <p>FLUTTER</p>
                    <div class="progress">
                       <div class="progress-bar" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">50</div>
                    </div>
               
            </div>
          </div>
      </div>
     </div>
    </div>
</div>

  );
}
}

export default Skills;