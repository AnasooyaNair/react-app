import React from 'react';
import './MainHeader.css';
import Navigation from './Navigation';

const MainHeader = (props) => {
  return (
  <div>
    <header>
      <div className="show-title">
        <h1>Service Now</h1>
        <p> A Service at any time website created by test company</p>
      </div>
      <Navigation isLoadedIn={props.isAuthenticated} notLoadedIn={props.notLoadedIn} page={props.page}/>
    </header>
  </div>
  )
}
export default MainHeader