import React,{useState} from 'react';
import WeatherReport from './components/WeatherReport';
import City from './components/City';
import './App.css';

const status = [
  {
    city: 'New York',
    temperature: '25°C',
    climate: 'Clear Sky'

  },
  
  {
    city: 'Los Angeles',
    temperature: '10°C',
    climate: 'Cloudy'

  },
  {
    city: 'Chicago',
    temperature: '2°C',
    climate: 'Snow fall'

  },

] ;
function App() {
  const [status,setStatus]= useState('');
  
  function addCityHandler(status){
  
    setStatus(prevStatus=>{
      return [status,...prevStatus];
    });

  }
  return (
    <div className='App-header'>
      <City  onAddCity={addCityHandler}/>
     
    </div>
  );
}

export default App;
