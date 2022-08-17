import React  from 'react';
import DetailsForm from './DetailsForm';
import './NewDetails.css';
function NewDetails(props){
    const saveDetailsHandler = enteredDetails =>{
        const empDetails ={
            ...enteredDetails,
           id: Math.random().toString()
        }; 
        
        props.onAddDetails(empDetails);
    }
return(
    <div className='new-details'>
        <DetailsForm onSaveDetails={saveDetailsHandler} ></DetailsForm>
        
    </div>
)
}
export default NewDetails;