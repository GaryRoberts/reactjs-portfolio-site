import React from 'react';
//import photo from './lambo.jpg';
import './Home.css';

// <img src='/images/lambo.jpg'  alt="cars" className="rounded-circle"></img>
function Home() {
  return (
    <div className="Body">
      <div class="row">
      <div class="col-sm-6">
        
          <h2>Hexagon</h2>
          <div class="hexa">
            <div class="hex1">
              <div class="hex2">
                <img src='/images/gary.jpg' alt="" width="320" height="313" />
              </div>
            </div>
          </div>

      </div>

      <div class="col-sm-6">
        <div class="card">
          <div class="card-body">
          <h2>Hexagon</h2>
          <div class="hexa">
            <div class="hex1">
              <div class="hex2">
                <img src="http://farm3.staticflickr.com/2788/4392569951_8bcec3b3ed_z.jpg?zz=1" alt="" width="320" height="313" />
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
   </div>
    </div>
  );
}

export default Home;
