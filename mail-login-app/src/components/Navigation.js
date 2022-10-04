import React from 'react';
import './Navigation.css';

function Navigation(props){
return (
  <div className='nav'>
    <ul>
{props.isLoggedIn &&
      <li>
      <a href='/'>About User</a>
      </li>
}
{props.isLoggedIn &&
      <li>
      <button onClick={props.isLoggedOut}>Logout</button>
      </li>
}
    </ul>
    </div>
)
}
export default Navigation;