import React, { useState } from 'react';
import DetailsList from './DetailsList';
import './Details.css';
import DetailsFilter from './DetailsFilter';
function Details(props){
    const [filteredYear,setFilteredYear] = useState("2020");
    const filterChangeHandler = (selectedYear)=>
    {
        setFilteredYear(selectedYear);
    }

    const filteredDetails = props.details.filter(details =>{
        return details.date.getFullYear().toString() === filteredYear;
    })

return(
    <div className='details'>
    {filteredDetails.map((details =>
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
