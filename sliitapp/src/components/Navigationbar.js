import React, { Component } from 'react';


class Navigationbar extends Component {
  render(){
  return (
    <div className="Navigationbar">
      <nav class="navbar navbar-expand-sm bg-dark navbar-dark">

          <a class="navbar-brand" href="#">Courses</a>

        
          <ul class="navbar-nav">
            
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbardrop" data-toggle="dropdown">
                Mathamatics
              </a>
              <div class="dropdown-menu">
                <a class="dropdown-item" href="#">Applied Maths</a>
                <a class="dropdown-item" href="#">pure Maths</a>
              </div>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbardrop" data-toggle="dropdown">
                Commerce
              </a>
              <div class="dropdown-menu">
                <a class="dropdown-item" href="#">Accounting</a>
                <a class="dropdown-item" href="#">Business Studies</a>
              </div>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbardrop" data-toggle="dropdown">
                Art
              </a>
              <div class="dropdown-menu">
                <a class="dropdown-item" href="#">Logistics</a>
                <a class="dropdown-item" href="#">Political Science</a>
              </div>
            </li>
          </ul>
        </nav>
    </div>
  );
  }
}

export default Navigationbar;