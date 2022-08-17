import React from 'react';
import DateDetails from './DateDetails';
import './DetailsList.css';

function DetailsList(props){
return(
    <div className='details-list'>
        <DateDetails date ={props.date}></DateDetails> 
        <div className='details-list__description'>
            <h2 >{props.name}</h2>
        </div>
        
    </div>
);
}
export default DetailsList;