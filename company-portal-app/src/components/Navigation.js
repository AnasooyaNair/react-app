import React from 'react';
import './Navigation.css';
import { Link } from 'react-router-dom';

const Navigation = (props) => {
  return (
  <nav className='navbar'>
    <ul>
      {props.isLoadedIn && (
      <li>
        <Link className= {props.page === "Home" ? "current" : ""} to="/home">Home</Link>
      </li>
      )}
      {props.isLoadedIn && (
      <li>
        <Link className= {props.page === "Services" ? "current" : ""} to="/services">Services</Link>
      </li>
      )}
      {props.isLoadedIn && (
      <li>
        <Link className= {props.page === "Partners" ? "current" : ""} to="/partners">Partners</Link>
      </li>
      )}
    </ul>
    <ul>
      {props.isLoadedIn && (
      <li>
        <div className='aboutus'>
          <Link className= {props.page === "AboutUs" ? "current" : ""} to ="/aboutus">About Us</Link>
        </div>
      </li>
      )}
    </ul>
  </nav>
  )
}
export default Navigation