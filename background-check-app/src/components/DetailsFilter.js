import React from 'react';

const DetailsFilter = (props)=>{
    const dropDownChangeHandler = (event) =>{
        props.onChangeFilter(event.target.value);
    }
    return (
        <div>
            <div>
                <label>Filter by year</label>
                <select value={props.selected} onChange= {dropDownChangeHandler}>
                    <option value='2006'>2006</option>
                    <option value='2007'>2007</option>
                    <option value='2008'>2008</option>
                    <option value='2010'>2010</option>
                </select>
                
            </div>
        </div>
    )
}
export default DetailsFilter;