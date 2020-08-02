import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import "aos/dist/aos.css"; 
import Navbar from './components/Navbar';

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <Navbar />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
