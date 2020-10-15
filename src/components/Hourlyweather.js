import React from "react";
import "./Hourlyweather.css";



class Hourlyweather extends React.Component {
  
    state = {
      input: ""
    };


    render() {
      let dataprop = this.props.data ;
      let isLoaded = this.props.isLoaded;

      if(!isLoaded){
        return <span className="currentweather__figcaption currentweather__figcaption--caption currentweather__figcaption--caption-status">
          <h1></h1>
          </span>
      }
      else if(dataprop.cod == "400"){
        return <span className="currentweather__figcaption currentweather__figcaption--caption currentweather__figcaption--caption-status">
        <h1></h1>
        </span>
      }
      else if(dataprop.cod == "404"){
        return <span className="currentweather__figcaption currentweather__figcaption--caption currentweather__figcaption--caption-status">
        <h1></h1>
        </span>
      }
      else{

  

        // let date = new Date().getHours();
        // let dattta = dataprop.list.forEach((element, index) => {
        //   let temp = new Date(element.dt_txt).getHours() - date;
        //   console.log(temp, "ss")
        //   if(Math.abs(temp <= 1)){
        //     dataprop.list.splice(index,1);
        //   }
        // });

       console.log(dataprop.list)
      return (
        <section className="hourlyweather">
          <ul className="hourlyweather__timelist">
           {dataprop.list.map((item, key)=> 
                
               <li key={key} className="hourlyweather__timelist--item"><time>{new Date(item.dt_txt).getHours().toString().padStart(2, '0')+":00"}</time><img src={this.props.getimg(item.weather[0].id)} alt={this.props.getimg(item.weather[0].main.description)}/>{Math.round(item.main.temp)}&#176;C</li>
           )}
           
              </ul>
        </section>
      );
            }  
  }

}

  export default Hourlyweather;