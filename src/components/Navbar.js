import React,{useEffect} from 'react';
import './css/Navbar.css';
import Aos from "aos"; //animate on scrolling
import $ from "jquery";

/* IMPORTING OF COMPONENTS  */

import Targets from './Targets';


function Navbar() {
  useEffect(()=>{
    Aos.init({duration:2000});

    $('body').scrollspy({ target: '#main-navbar' });

    var started=0;

    $(window).scroll(function() {
      if ($('#skills').is(':visible') && started!==1) {
        var delay = 500;
        $(".progress-bar").each(function(i){
            $(this).delay( delay*i ).animate( { width: $(this).attr('aria-valuenow') + '%' }, delay );
    
            $(this).prop('Counter',0).animate({
                Counter: $(this).text()
            }, {
                duration: delay,
                easing: 'swing',
                step: function (now) {
                    $(this).text(Math.ceil(now)+'%');
                }
            });
        });
        started=1;
      }
  });


    
   },[]);

  return (
  <div id="home">
    <nav id="main-navbar" data-aos="fade-left" class="navbar navbar-expand-md navbar-dark fixed-top bg-black">
    <a class="navbar-brand" href=".">
    <div class="row site-name">
     <img src='/images/nav-brand.png' width="30" height="30" class="d-inline-block align-top" alt=""></img>
    Gary Roberts
    </div>
  </a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav">
        <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
        
        <ul data-aos="zoom-in" class="navbar-nav ml-auto">
            <li class="nav-item">
                <a class="nav-link active page-scroll" href="#banner">Home</a>
            </li>
            <li class="nav-item">
                <a class="nav-link page-scroll" href="#about">About</a>
            </li>
            <li class="nav-item">
                <a class="nav-link page-scroll" href="#skills">Skills</a>
            </li>
            <li class="nav-item">
                <a class="nav-link page-scroll" href="#projects">Projects</a>
            </li>
            <li class="nav-item">
                <a class="nav-link page-scroll" href="#achievements">Achievements</a>
            </li>
            <li class="nav-item">
                <a class="nav-link page-scroll" href="#contact">Contact</a>
            </li>
        </ul>
    </div>
</nav>

<Targets />

</div>


  );
}

export default Navbar;