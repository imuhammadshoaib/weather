import React, { Component } from 'react';

class SearchWeather extends Component{
    constructor(){
        super();
        this.state = {
            search:'',
            country: 'bambo',
            apiKey :{
                key : "4b0b3c3b197148128d1111017202312",
                base :"https://api.weatherapi.com/v1/",
                method_current : "current.json",
                method_search : "search.json"
              },
              weather_data:[]
        }

    }

    onTextChange = (event) => {
        this.setState({search: event.target.value});
    }

    onChange = (event) => {
    fetch( this.state.apiKey.base + this.state.apiKey.method_search+'?key='+this.state.apiKey.key+'&q='+this.state.search)
        .then((res) => res.json())
        .then ((data) => {     
            data.weather_data = data;
            this.setState(data);
            //console.log(data);
        });
    }

   

    render(){
        return(
            <div>
                <input type="text" onChange= {this.onTextChange} />
                <input type="button"  onClick= {this.onChange} value="Click"/>
                { this.state.weather_data.map((item)=> { return <p>{item.name}</p> })
                }
            </div>
            
        );
    }

}

export default SearchWeather;