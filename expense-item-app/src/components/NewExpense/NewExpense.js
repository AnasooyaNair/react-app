import React , {useState} from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';


function NewExpense(props){
    const[isEditable, setIsEditable] = useState(false);
    
    function saveExpenseDataHandler(enteredExpenseData) {
        const expenseData={
            ...enteredExpenseData,
           id: Math.random().toString()
        }; 
        //console.log(expenseData);
        props.onAddExpense(expenseData);
        setIsEditable(false);
    }
    const startEditingHandler = () =>{
        setIsEditable(true); 
    }

    const stopEditingHandler = () => {
        setIsEditable(false); 
    }
return(
    <div className='new-expense'>
    {!isEditable && <button onClick={startEditingHandler}>Add New Expense</button>}
    {isEditable && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel ={stopEditingHandler}></ExpenseForm>}
    </div>);
}
export default NewExpense;