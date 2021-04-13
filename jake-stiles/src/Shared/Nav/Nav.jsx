import { NavLink } from "react-router-dom";
import "./Nav.css";

import React from 'react';

function Nav(props) {
  return (
    <nav>
    <div className='nav'>
        <NavLink className="logo" to="/">
          <div>Jake Stiles</div>
          <div>Software Engineer</div>
        </NavLink>
        <div className='links-container'>
        <NavLink className='link' to='/projects'>Projects</NavLink>
        <NavLink className='link' to='/contact'>Contact</NavLink>
          <NavLink className='link' to='/resume'>Resume</NavLink>
          </div>
      </div>
      </nav>
  );
}

export default Nav;