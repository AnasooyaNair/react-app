import React from 'react';
import { useState } from 'react';
import CompanyDetailsDisplay from './CompanyDetailsDisplay';
import Section from './Section';
import MainHeader from './MainHeader';
import Footer from './Footer';

const INITIAL_DETAILS = [
  {
    id :'',
    officialComName:'',
    commercialName:'',
    companyType: '',
    serviceArea:[],
    countryOfOperation:''
  }
]

const Home = () =>{
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
  const [details,setDetails] = useState(INITIAL_DETAILS);
  const addCompanyDetailshandler = (details) => {
    setDetails(prevDetails => {
      return[details,...prevDetails];
    });
  }
  
  return (
  <div className='grid-container'>
    <div className='header'>
      <MainHeader isAuthenticated={detailsHandler} notLoadedIn={noDetailsHandler} page={'Home'}/>
    </div>
    <div className='section'>
      <Section datas={details}/>
    </div>
    <div className='aside'>
      <CompanyDetailsDisplay onAddCompanyDetails={addCompanyDetailshandler}/>
    </div>
    <div className='footer'>
      <Footer/>
    </div>
  </div>
  )
}
export default Home