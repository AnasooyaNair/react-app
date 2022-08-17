import React, {useState}from 'react';

import ExpenseItem from "./ExpenseItem";
import ExpenseFilter from "./ExpenseFilter";
 /*import Card from './Card';*/
import "./Expenses.css";
import "./ExpenseFilter.css";

function Expenses(props){
    const [filteredYear, setFilteredYear] = useState('2020');
    const filterChangeHandler = (selectedYear) =>{
        //console.log('Expenses.js');
       // console.log(selectedYear);
       setFilteredYear(selectedYear);
    }
    return (
    <div className="expenses">
    <ExpenseFilter selected={filteredYear} onChangeFilter={filterChangeHandler}></ExpenseFilter>
    {props.items.map((expense) =>(
    <ExpenseItem 
        key ={expense.id}
        title={expense.title} 
        amount={expense.amount} 
        date={expense.date}
        />
    ))}
    
    </div>
    );
}
export default Expenses;