import React,{useState} from 'react';
import './DetailsForm.css';

function DetailsForm(props){
    const [enteredName,setEnteredName] = useState('');
    const [enteredDate,setEnteredDate] = useState('');
    const nameAddHandler = (event) =>
    {
        setEnteredName(event.target.value);
    }
    const dateChangeHandler = (event) =>
    {
        setEnteredDate(event.target.value);
    }
    function submitHandler (event){
        event.preventDefault();
        const empDetails ={
            ename:enteredName,
            date:new Date (enteredDate)
        }
        props.onSaveDetails(empDetails);
        setEnteredName('');
        setEnteredDate('');
    }
   
    
    return(
        <form onSubmit={submitHandler}>
            <div className='new-details__controls'>
            <div className='new-details__control'>
            <label>Ename</label>
            <input type="text" onChange={nameAddHandler} value={enteredName}></input>
            </div>
            <div className='new-details__control'>
            <label>Date</label>
            <input type="date" min="2019-01-01" max="2022-12-31" onChange={dateChangeHandler} value={enteredDate}></input>
            </div>
        </div>
        <div className='new-details__actions'>
            <button type= "button" onClick={props.onCancel}>Cancel</button>
            <button type="submit">Add Details</button>
        </div>
        </form>
    );
}
export default DetailsForm;