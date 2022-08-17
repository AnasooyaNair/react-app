import React from 'react';
import './WeatherDetails.css';
function WeatherDetails(props){
return(
    <div className='weather_updates'>
        <h2>Today</h2>
        <div>{props.city}</div>
        <div>{props.temperature}</div>
        <div>{props.climate}</div>
    </div>
);


}
export default WeatherDetails;