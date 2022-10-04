import './App.css';
import React from "react";
import { useState } from 'react';

import MainHeader from './components/MainHeader';
import CompanyDetailsDisplay from './components/CompanyDetailsDisplay';
import Section from './components/Section';
import Footer from './components/Footer';

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


function App() {
  const [isLoadedIn, setIsLoadedIn] = useState(false);
    const [details,setDetails] = useState(INITIAL_DETAILS);

    const detailsHandler = (officialComName,commercialName,companyType,serviceArea,countryOfOperation) => {
      console.log(isLoadedIn);
      setIsLoadedIn(true);
}
  const noDetailsHandler = () => {
    setIsLoadedIn(false);
  }

  const addCompanyDetailshandler = (details) =>{
    console.log('in App.js');
    console.log(details);
    setDetails(prevDetails =>{
      return[details,...prevDetails];
    });
  }
  return (
    <div className='grid-container'>
    <div className='header'>
      <MainHeader isAuthenticated={detailsHandler} notLoadedIn={noDetailsHandler}  />
    </div>
      <div className='section'>
        <Section datas={details} />
      </div>
      <div className='aside'>
        <CompanyDetailsDisplay onAddCompanyDetails={addCompanyDetailshandler} />
      </div>
    <div className='footer'>
      <Footer />
    </div>
  </div>
  );

   
}

export default App;
