import React from "react";
import "./Currentweather.css";




class Currentweather extends React.Component {
    state = {
      input: ""
    };
  
    render() {
      let date = new Date().getHours();
      let dataprop = this.props.data;

      let data = dataprop.filter((element) => {
        let temp = new Date(element.dt_txt).getHours() - date;
        console.log(new Date(element.dt_txt).getHours(), date , Math.abs(temp))
        if( Math.abs(temp) <= 1 ){
             return element
           }
  
      });

      console.log(data)
      
      return (
        <section className="currentweather">
            <figure className="currentweather currentweather__figure">
                  <img className="currentweather__figure currentweather__figure--img" src={this.props.getimg(data[0].weather[0].id)} alt={data[0].weather[0].description} />
            </figure>
            <figcaption className="currentweather currentweather__figcaption">
                  <span className="currentweather__figcaption currentweather__figcaption--caption currentweather__figcaption--caption-status">
                    <h1>{data[0].weather[0].description}</h1>
                  </span>
                  <span className="currentweather__figcaption currentweather__figcaption--caption currentweather__figcaption--caption-temperature">
                  <h2>Temperature </h2> {data[0].main.temp_min} &#176; to {data[0].main.temp_max} &#176;C
                  </span>
                  <span className="currentweather__figcaption currentweather__figcaption--caption currentweather__figcaption--caption-humidity-pressure">
                    <h3>Humidity </h3> {data[0].main.humidity}
                    <h3>Pressure </h3> {data[0].main.pressure}
                  </span>
            </figcaption>  

        </section>

      );
  }

}

  export default Currentweather;