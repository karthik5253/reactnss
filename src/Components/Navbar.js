import React from "react";
import "./navbar.css";
import logo from '../Images/SJUlogo.jpg';
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="main-nav">
        
        <div className="logo">
          <img src={logo} width={150} height={100}/>
        </div>
         
        <div
          className= "menu-link">
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/Enrollment">Enrollment </NavLink>
            </li>
            <li>
              <NavLink to="/Events">Events</NavLink>
            </li>
            <li>
              <NavLink to="/About">About</NavLink>
            </li>
            <li>
              <NavLink to="/Feedback">FeedBack </NavLink>
            </li>
            <li>
              <NavLink to="/Login">Login</NavLink>
            </li>
            <li className="signup">
              <NavLink to="/Signup"> Signup</NavLink>
            </li>
            
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;