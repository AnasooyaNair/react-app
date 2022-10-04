import React from 'react';
import CompanyDetails from './CompanyDetails';
import './CompanyDetailsDisplay.css';

const CompanyDetailsDisplay = (props) => {
   
    
    const saveCompanyDataHandler=(enteredCompanyDetails)=> {
        const companyDetails={
            ...enteredCompanyDetails,
           id: Math.random().toString()
        }; 
       
        props.onAddCompanyDetails(companyDetails);
       
    }
    
return(
    <div className='new-details'>
    
    {<CompanyDetails onSaveCompanyDetails={saveCompanyDataHandler} />}
    </div>);
}
export default CompanyDetailsDisplay