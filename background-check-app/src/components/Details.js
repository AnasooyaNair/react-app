import React from 'react';
import DetailsList from './DetailsList';
import './Details.css';
function Details(props){
return(
    <div className='details'>
    {props.details.map((details =>
     <DetailsList 
     key= {details.id}
     name={details.ename}
     date={details.date}
    />
    )) }

    </div>

);
}
export default Details;
