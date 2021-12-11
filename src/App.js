let App = () => {

  const api = {
    key: "001b0f58045147663b1ea518d34d88b4",
    base: "https://api.openweathermap.org/data/2.5/"
  }

  let date = new Date();


  let weather = () => {
    let loc = document.querySelector('input').value;
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${loc}&appid=001b0f58045147663b1ea518d34d88b4&units=metric`)
      .then(res => res.json())
      .then(data => {console.log(data.sys.country)
      
        document.querySelector('.place').innerHTML = `${data.name}, ${data.sys.country}`;
        document.querySelector('.temp').innerHTML = `${data.main.temp}°c`;
        document.querySelector('.weather').innerHTML = data.weather[0].description;

      let city = data.name;
      var weather = data.weather[0].description;
    }
      )


}



  return (<>
    <div className="box">


      <div className="container">
        <input type='text' placeholder="Enter Place" />
        <button onClick={weather} >check</button>
        <div className="place">{}</div>
        <div className="time">{
date.toLocaleDateString()
        }</div>
        <div className="temp">{}</div>
        <div className="weather"></div>



      </div>
    </div>

  </>)
}

export default App;