import { NavLink } from "react-router-dom";
import "./Nav.css";

import React from 'react';

function Nav(props) {
  return (
    <nav>
    <div className='nav'>
        <NavLink className="logo" to="/">Jake Stiles</NavLink>
        <NavLink className='link' to='/projects'>Projects</NavLink>
        <NavLink className='link' to='/contact'>Contact</NavLink>
        <NavLink className='link' to='/resume'>Resume</NavLink>
      </div>
      </nav>
  );
}

export default Nav;