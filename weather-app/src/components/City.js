import React,{useState} from 'react';
import WeatherDetails from './WeatherDetails';
import './City.css';
  

function City(props){
const [enteredCity,setEneteredCity] = useState('');

function cityChangeHandler(event){
    setEneteredCity(event.target.value);
}
function saveCityNameDataHandler(enteredCity){
    const status={
        ...enteredCity,
       
    }; 
    //console.log(status);
    props.onAddCity(status);
}

return(
    <div className='city_details'>
        
        <label>City</label>
        <input type="text" placeholder='Enter a city' onChange={cityChangeHandler} value={enteredCity}></input>
        <WeatherDetails onSaveCityNameData={saveCityNameDataHandler}></WeatherDetails>
            <div className='city_action'>
            <button type="submit">Display Weather Report</button>
            </div>
       
    </div>
)
}
export default City;