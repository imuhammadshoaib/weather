import React from 'react';
import './App.css';
import SearchWeather from './search_weather.js';
class App extends React.Component{
  
  render(){
    return (
      <div className="App">
         <SearchWeather/>
      </div>
    );    
  }
}

export default App;
