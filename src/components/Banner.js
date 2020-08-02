import React,{useEffect} from 'react';
import Aos from "aos";
import './css/Banner.css';
import $ from "jquery";

function Banner() {
  useEffect(()=>{
   Aos.init({duration:2000});
   
   $('.carousel').carousel();
  },[]);

  return (

    <div class="row custom-row">
      
     <div data-aos="zoom-in" class="col-sm-3">
        <h2 class="name-heading" >Gary Roberts</h2>
        <img src='/images/gary.jpg' alt="..." class="img-fluid profile-img"></img>
        
      </div>

      <div data-aos="slide-up" class="col-sm-6">
        <div class="bio">
            <h3>Who is Gary Roberts?</h3>
           <p>Gary Roberts is a Jamaican software engineer who is passionate about mobile and web development. Gary has been programming since high school and have created many projects in various programming languages. <br></br><br></br>He has won numerous awards for high achievement in programming courses in university and have been mentored by senior software engineers over the years who contributed to his development. He has worked on many critical thinking algorithms that have impressed prestigious institutions such as M.I.T</p>
        </div>
      </div>

      <div data-aos="flip-down" class="col-sm-3">
        <div class="card border-0">
          <div class="card-body">
          <h3>Resume & Github</h3>
            <p><b>Email:</b> garyroberts1995@gmail.com</p>
            <p><b>Telephone:</b> (876) ###-####</p>
            <div class="row">
                <p class="resume-label"><b>View Resume:</b></p>
                <a href="/images/resume.pdf"><img src='/images/resume.png' alt="..." class="download-icon"></img></a>
            </div>
            <div class="row">
              <p>Link to github --></p>
              <a href="https://github.com/GaryRoberts"><img src='/images/github-icon.jpg' alt="..." class="github-icon"></img></a>
           </div>
           <img src='/images/keyboard.gif' alt="..." class="keyboard-img"></img>
          </div>
        </div>
      </div> 
      

   </div>
  
  );
}

export default Banner;