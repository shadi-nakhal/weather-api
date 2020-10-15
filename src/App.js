import React, { Component, Fragment } from "react";
import Searchbox from "./components/Searchbox";
import Currentweather from "./components/Currentweather";
import Hourlyweather from "./components/Hourlyweather";

import clear from "./img/weather-icons/clear.svg";
import cloudy from "./img/weather-icons/cloudy.svg";
import drizzle from "./img/weather-icons/drizzle.svg";
import fog from "./img/weather-icons/fog.svg";
import mostlycloudy from "./img/weather-icons/mostlycloudy.svg";
import partlycloudy from "./img/weather-icons/partlycloudy.svg";
import rain from "./img/weather-icons/rain.svg";
import snow from "./img/weather-icons/snow.svg";
import storm from "./img/weather-icons/storm.svg";
import unknown from "./img/weather-icons/unknown.svg";
import api_data from "./fakeWeatherData.json";

import "./App.css";

const api_key = "84850b10e246e483fdf5c887d3ca53f4"

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      city: "London",
      isLoaded: false,
      response: {}

    };
  }

 



  handleInputChange = value => {
    this.setState({ city: value });
  };


  handleErrors = response => {
    if(!response.ok){
      this.setState({isLoaded: false})
    }
  }


  componentDidMount(){
    fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${this.state.city}&cnt=8&units=metric&appid=${api_key}`)
        .then(response => response.json())
        .then(json => {
          this.setState({
            isLoaded: true,
            response: json
          })
        
        })
        
  }

  searchCity = (citty) => {
   
    fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${citty}&cnt=8&units=metric&appid=${api_key}`)
        .then(response => response.json())
        .then(json => {
          console.log(json, "shii")
          this.setState({
            isLoaded: true,
            response: json
          })

        });
        
  }

  getimg(id){
    if(id <= 300){
      return storm
    }if (id > 300 && id <= 499){
      return drizzle;
    }if(id >= 500 && id <= 599){
      return rain
    }if(id >= 600 && id <= 699){
      return snow
    }if(id == 800){
      return clear
    }if(id >= 801 && id <= 805){
      return mostlycloudy
    } }


  render() {

  var  data = api_data.list.slice(5,12).map(obj => {
      return obj
  })



    return (
      <div className="app">
        <Searchbox handleInput={this.handleInputChange} searchCity={this.searchCity}/>
        <Currentweather isLoaded={this.state.isLoaded} data={this.state.response} getimg={this.getimg} />
        <Hourlyweather isLoaded={this.state.isLoaded} data={this.state.response} getimg={this.getimg}/>
      </div>
    );
  }
}

export default App;
