import React, { useState } from 'react';
import DetailsList from './DetailsList';
import './Details.css';
import DetailsFilter from './DetailsFilter';
function Details(props){
    const [filteredYear,setFilteredYear] = useState("2007");
    const filterChangeHandler = (selectedYear)=>
    {
        setFilteredYear(selectedYear);
    }

return(
    <div className='details'>
    {props.details.map((details =>
     <DetailsList 
     key= {details.id}
     name={details.ename}
     date={details.date}
    />
    )) }
    <DetailsFilter selected ={filteredYear} onChangeFilter={filterChangeHandler}></DetailsFilter>

    </div>

);
}
export default Details;
