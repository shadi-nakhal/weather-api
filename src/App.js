import React, { Component } from "react";
// import Search from "./components/Search";

// import SayHi, { SayHello } from "./components/WeatherItem";
// import fakeWeatherData from "./fakeWeatherData.json";

import "./App.css";

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
              <input type="search" aria-describedby="search for a country or city weather " placeholder="London"/>
              <button type="submit">Find Weather</button>
        </header>
        <section id="current-weather">
            <figure>
                  <img src="https://placekitten.com/200/300" alt="raining clouds if it's rainy, sun if it's sunny"></img>
            </figure>
            <figcaption>
                  <h1>Temperature</h1>
                  <h2>humidity: 76%</h2>
                  <h2>Pressure: 10008.48</h2>
            </figcaption>   
        </section>
        <section id="hourly-weather">
            <ul className="time-list">
                <li><time>03:30</time><img alt="icon to indicate weather"/>8&#176;C</li>
                <li><time>06:00</time><img alt="icon to indicate weather"/>9&#176;C</li>
                <li><time>09:00</time><img alt="icon to indicate weather"/>14&#176;C</li>
                <li><time>12:00</time><img alt="icon to indicate weather"/>17&#176;C</li>
                <li><time>15:00</time><img alt="icon to indicate weather"/>18&#176;C</li>
                <li><time>18:00</time><img alt="icon to indicate weather"/>16&#176;C</li>
                <li><time>21:00</time><img alt="icon to indicate weather"/>13&#176;C</li>
            </ul>
        </section>
      </div>
    );
  }
}

export default App;
