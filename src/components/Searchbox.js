import React from "react";
import "./Searchbox.css";


class Searchbox extends React.Component {
    state = {
      input: ""
    };
  
    render() {
      return (
        <header className='searchbox'>
            <input className="searchbox__input" type="search" aria-describedby="search for a country or city weather " placeholder="Type in a city name"
            onChange={event => {
              this.setState({ input: event.target.value });
            }}/>
            <button className="searchbox__button" type="submit"
            onClick={event => {
              this.props.handleInput(this.state.input);
              this.props.searchCity(this.state.input)
            }}>Find Weather</button>{this.state.input}
        </header>


      );
  }

}

  export default Searchbox;