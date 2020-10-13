import React from "react";
import "./Searchbox.css";


class Searchbox extends React.Component {
    state = {
      input: ""
    };
  
    render() {
      return (
        <header className='searchbox'>
            <input className="searchbox__input" type="search" aria-describedby="search for a country or city weather " placeholder="Type in a city name"/>
            <button className="searchbox__button" type="submit">Find Weather</button>
        </header>


      );
  }

}

  export default Searchbox;