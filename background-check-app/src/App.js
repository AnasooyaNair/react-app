import React, { useState } from 'react';
import Details from './components/Details';
import './App.css';
import NewDetails from './components/NewDetails/NewDetails';

const INITIAL_DETAILS = [{
  id:'1',
  ename: 'Ram',
  date: new Date(2007, 6, 12),
  
},
{
  id:'2',
  ename: 'Sam',
  date: new Date(2010, 2, 10),
  
},

];
function App(props) {
  const[details,setDetails]= useState(INITIAL_DETAILS);

  
function AddDetailsHandler(details){
  console.log("In App js");
  console.log(details);
  setDetails(prevDetails =>{
    return[details,...prevDetails]
  });
 

}
  return (
    <div >
      <NewDetails onAddDetails={AddDetailsHandler}></NewDetails>
      <Details details={details}></Details>
    </div>
  );
}

export default App;
