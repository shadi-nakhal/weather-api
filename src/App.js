import React, { Component, Fragment } from "react";
import Searchbox from "./components/Searchbox";
import Currentweather from "./components/Currentweather";
import Hourlyweather from "./components/Hourlyweather";

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
        <Searchbox />
        <Currentweather />
        <Hourlyweather />
      </div>
    );
  }
}

export default App;
