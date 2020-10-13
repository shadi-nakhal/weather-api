import React from "react";
import "./Currentweather.css";

import clear from "./../img/weather-icons/clear.svg";
import cloudy from "./../img/weather-icons/cloudy.svg";
import drizzle from "./../img/weather-icons/drizzle.svg";
import fog from "./../img/weather-icons/fog.svg";
import mostlycloudy from "./../img/weather-icons/mostlycloudy.svg";
import partlycloudy from "./../img/weather-icons/partlycloudy.svg";
import rain from "./../img/weather-icons/rain.svg";
import snow from "./../img/weather-icons/snow.svg";
import storm from "./../img/weather-icons/storm.svg";
import unknown from "./../img/weather-icons/unknown.svg";


class Currentweather extends React.Component {
    state = {
      input: ""
    };
  
    render() {
      return (
        <section className="currentweather">
            <figure className="currentweather__figure">
                  <img className="currentweather__figure currentweather__figure--img" src={mostlycloudy} alt="mostlycloudy icon"/>
            </figure>
            <figcaption className="currentweather__figcaption">
                  <span className="currentweather__figcaption currentweather__figcaption--caption-status">
                    <h1>overcast clouds</h1>
                  </span>
                  <span className="currentweather__figcaption currentweather__figcaption--caption-temperature">
                    <h2>Temperature </h2> 10&#176; to 11&#176;C
                    </span>
                    <span className="currentweather__figcaption currentweather__figcaption--caption-humidity-pressure">
                  <h3>Humidity </h3> 76%
                  <h3>Pressure </h3> 10008.48
                  </span>
            </figcaption>   
        </section>

      );
  }

}

  export default Currentweather;