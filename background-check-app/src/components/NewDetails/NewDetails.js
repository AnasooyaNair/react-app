import React, { useState }  from 'react';
import DetailsForm from './DetailsForm';
import './NewDetails.css';
function NewDetails(props){
    const [isEditing , setIsEditing] = useState(false);
    const saveDetailsHandler = enteredDetails =>{
        const empDetails ={
            ...enteredDetails,
           id: Math.random().toString()
        }; 
        
        props.onAddDetails(empDetails);
        setIsEditing(false);
    }

    const startEditingHandler = () => {
        setIsEditing(true);
    }
    const stopEditingHandler = () => {
        setIsEditing(false);
    }
return(
    <div className='new-details'>
       { !isEditing && <button onClick={startEditingHandler}>Add New Details</button>}
        { isEditing && <DetailsForm onSaveDetails={saveDetailsHandler} onCancel = {stopEditingHandler}></DetailsForm>}
        
    </div>
)
}
export default NewDetails;