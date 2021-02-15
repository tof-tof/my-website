/*eslint-disable */
import React from "react";
import './ExplodingLayers.css';
import Pdf from './assets/Adigun-Hameed_T.pdf';

export default function ExplodingLayers() {
  return (
    <div>
      <ul> 
        <li>
          <a href="mailto:tofunmi.ah@gmail.com">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span className="fa fa-envelope-o"></span>
          </a> 
        </li>
        <li>
          <a href="https://github.com/tof-tof">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span className="fa fa-github"></span>
          </a> 
        </li>
        <li>
          <a href="https://www.linkedin.com/in/tofunmi-adigun-hameed/">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span className="fa fa-linkedin"></span>
          </a> 
        </li>
        <li>
          <a href={ Pdf }>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span className="fa fa-address-card-o"></span>
          </a> 
        </li>
      </ul>  
    </div> 
  );
}

