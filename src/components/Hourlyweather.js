import React from "react";
import "./Hourlyweather.css";

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


class Hourlyweather extends React.Component {
    state = {
      input: ""
    };
  
    render() {
      return (
        <section className="hourlyweather">
            <ul className="hourlyweather__timelist">
                <li className="hourlyweather__timelist hourlyweather__timelist--threeAM"><time>03:30</time><img src={mostlycloudy} alt="mostlycloudy icon"/>8&#176;C</li>
                <li className="hourlyweather__timelist hourlyweather__timelist--sixAM"><time>06:00</time><img src={mostlycloudy} alt="mostlycloudy icon"/>9&#176;C</li>
                <li className="hourlyweather__timelist hourlyweather__timelist--nineAM"><time>09:00</time><img src={clear} alt="clear icon"/>14&#176;C</li>
                <li className="hourlyweather__timelist hourlyweather__timelist--twelvePM"><time>12:00</time><img src={clear} alt="clear icon"/>17&#176;C</li>
                <li className="hourlyweather__timelist hourlyweather__timelist--threePM"><time>15:00</time><img src={clear} alt="clear icon"/>18&#176;C</li>
                <li className="hourlyweather__timelist hourlyweather__timelist--sixPM"><time>18:00</time><img src={clear} alt="clear icon"/>16&#176;C</li>
                <li className="hourlyweather__timelist hourlyweather__timelist--ninePM"><time>21:00</time><img src={mostlycloudy} alt="mostlycloudy icon"/>13&#176;C</li>
            </ul>
        </section>

      );
  }

}

  export default Hourlyweather;