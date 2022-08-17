import React from 'react';
import City from './City';
import './WeatherReport.css';
  

function WeatherReport(props){
   
return(
    
        
        <div className='weather_description'>
        <div className='weather_box'>
        
        <City>{props.city}</City>
        <div>{props.temperature}</div>
        <div>{props.climate}</div>
        </div>
    </div>
   
)
}
export default WeatherReport;