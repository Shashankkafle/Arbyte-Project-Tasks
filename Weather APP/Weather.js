var x = document.getElementById("container");
var latitude,longitude;
function getLocation() {
    if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(getPosition);
      } else { 
        x.innerHTML = "Geolocation is not supported by this browser.";
      }
  }

function getPosition(position) {
    latitude=position.coords.latitude.toString();
    longitude=position.coords.longitude.toString();
    console.log(latitude)
    console.log(longitude)
    
   const weather= fetch('https://api.openweathermap.org/data/2.5/onecall?lat='+latitude+'&lon='+longitude+'&units=metric&appid=d1bfed90440973ed3f187d0755d63a04')
      .then(response=>response.json())
        .then(data=>{
          return(data);
        })
    
  
 async function setWeather(){
  let weatherData= await weather
  console.log(weatherData)
  document.getElementById("location").innerHTML='Location: '+weatherData.timezone
  document.getElementById("temprature").innerHTML='Temprature: '+weatherData.current.temp
  document.getElementById("time").innerHTML='Time: '+new Date().getHours()+":"+new Date().getMinutes()
  document.getElementById("visibiity").innerHTML='Visibility: '+weatherData.current.visibility+'m'
}
setWeather();
}
getLocation();

