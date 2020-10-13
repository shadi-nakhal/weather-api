import React, { Component, Fragment } from "react";
// import Search from "./components/Search";

// import SayHi, { SayHello } from "./components/WeatherItem";
// import fakeWeatherData from "./fakeWeatherData.json";
import "./App.css";
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
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Shadi & Manal"
    };
  }

  handleInputChange = value => {
    this.setState({ name: value });
  };

  render() {
    return (
      <div className="app">
        <header id='searchbox'>
              <input type="search" aria-describedby="search for a country or city weather " placeholder="Type in a city name"/>
              <button type="submit">Find Weather</button>
        </header>
        <section id="current-weather">
            <figure className="current-weather">
                  <img src={mostlycloudy} alt="mostlycloudy icon"/>
            </figure>
            <figcaption className="current-weather">
                  <span className=" caption status">
                    <h1>overcast clouds</h1>
                  </span>
                  <span className="caption temperature">
                    <h2>Temperature </h2> 10&#176; to 11&#176;C
                    </span>
                    <span className="caption humidity-pressure">
                  <h3>Humidity </h3> 76%
                  <h3>Pressure </h3> 10008.48
                  </span>
            </figcaption>   
        </section>
        <section id="hourly-weather">
            <ul className="time-list">
                <li><time>03:30</time><img src={mostlycloudy} alt="mostlycloudy icon"/>8&#176;C</li>
                <li><time>06:00</time><img src={mostlycloudy} alt="mostlycloudy icon"/>9&#176;C</li>
                <li><time>09:00</time><img src={clear} alt="clear icon"/>14&#176;C</li>
                <li><time>12:00</time><img src={clear} alt="clear icon"/>17&#176;C</li>
                <li><time>15:00</time><img src={clear} alt="clear icon"/>18&#176;C</li>
                <li><time>18:00</time><img src={clear} alt="clear icon"/>16&#176;C</li>
                <li><time>21:00</time><img src={mostlycloudy} alt="mostlycloudy icon"/>13&#176;C</li>
            </ul>
        </section>
      </div>
    );
  }
}

export default App;
