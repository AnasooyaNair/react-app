import React from 'react';
import './Navigation.css';

  
const Navigation = (props) =>{
    return (
    <nav className='navbar'>
        <ul>
        {props.isLoadedIn && (
          <li>
            <a className="current" href="/">Home</a>
          </li>
        )}
        {props.isLoadedIn && (
          <li>
            <a href="/">Services</a>
          </li>
        )}
        {props.isLoadedIn && (
          <li>
            <a href="/">Partners</a>
          </li>
        )}
      </ul>
      <ul>
   {props.isLoadedIn && (
       <li>
         <a className='aboutus' href="/">About Us</a>
         </li>
       )}
       </ul>
     </nav>
    )
}
export default Navigation