import React from 'react';
import MainHeader from './MainHeader';
import Footer from './Footer';
import { useState } from 'react';

const AboutUs = () => {
  const [setIsLoadedIn] = useState(false);
  const detailsHandler = (
    officialComName,
    commercialName,
    companyType,
    serviceArea,
    countryOfOperation) => {
    setIsLoadedIn(true);
  }
  const noDetailsHandler = () => {
    setIsLoadedIn(false);
  }

return (
 <div className='grid-container'>
    <div className='header'>
      <MainHeader isAuthenticated={detailsHandler} notLoadedIn={noDetailsHandler} page={'AboutUs'}/>
    </div>
    <div className= 'contentdetails'>
      <h1>About Us Page</h1>
      <br></br>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus ab voluptate fugit nulla eveniet officia!</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus ab voluptate fugit nulla eveniet officia!</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus ab voluptate fugit nulla eveniet officia!</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus ab voluptate fugit nulla eveniet officia!</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus ab voluptate fugit nulla eveniet officia!</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus ab voluptate fugit nulla eveniet officia!</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus ab voluptate fugit nulla eveniet officia!</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus ab voluptate fugit nulla eveniet officia!</p>
    </div>
    <div className='footer'> 
      <Footer/>
    </div>
  </div>
  )
}
export default AboutUs