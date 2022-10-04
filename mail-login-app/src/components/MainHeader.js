import React from 'react';
import './MainHeader.css';
import Navigation from './Navigation';

function MainHeader (props){
    return (
        <div className='main-header'>
            <h4>Demo Mail</h4>
            <Navigation isLoggedIn ={props.isAuthenticated} isLoggedOut = {props.onLogOut}></Navigation>
        </div>
    )

}
export default MainHeader;