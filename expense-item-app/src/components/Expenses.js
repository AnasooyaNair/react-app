import React, {useState}from 'react';

import ExpenseFilter from "./ExpenseFilter";
 /*import Card from './Card';*/
import "./Expenses.css";
import "./ExpenseFilter.css";
import ExpenseList from './ExpenseList';
import ExpenseChart from './ExpenseChart';

function Expenses(props){
    const [filteredYear, setFilteredYear] = useState('2007');
    const filterChangeHandler = (selectedYear) =>{
        //console.log('Expenses.js');
       // console.log(selectedYear);
       setFilteredYear(selectedYear);
    }
    const filteredExpenses = props.items.filter(expense =>{
        return expense.date.getFullYear().toString() === filteredYear;
    });

    

    return (
    <div className="expenses">
    <ExpenseFilter selected={filteredYear} onChangeFilter={filterChangeHandler}></ExpenseFilter>
    <ExpenseChart expenses ={filteredExpenses} ></ExpenseChart>
    <ExpenseList items ={filteredExpenses}></ExpenseList>
    
    </div>
    );
}
export default Expenses;