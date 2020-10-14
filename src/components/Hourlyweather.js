import React from "react";
import "./Hourlyweather.css";



class Hourlyweather extends React.Component {
  
    state = {
      input: ""
    };


    render() {
     let data = this.props.data;
  
      return (
        <section className="hourlyweather">
          <ul className="hourlyweather__timelist">
           {data.map((item, key)=> 
                
               <li key={key} className="hourlyweather__timelist--item"><time>{new Date(item.dt_txt).getHours().toString().padStart(2, '0')+":00"}</time><img src={this.props.getimg(item.weather[0].id)} alt={this.props.getimg(item.weather[0].main.description)}/>{Math.round(item.main.temp)}&#176;C</li>
           )}
           
              </ul>
        </section>
      );  
  }

}

  export default Hourlyweather;