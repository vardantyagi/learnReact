import { useEffect, useState } from 'react';
import './App.css'
import { ToastContainer, toast } from 'react-toastify';
import loading from './photos/loading.gif'
function App() {
  let [count,setCount] = useState(1);
  useEffect((e)=>{
    console.log('effect hit');
  },[count])
  let [city,setCity] = useState('');
  let [cityDetails,setCityDetails] = useState(undefined);
  let [isLoading,setIsLoading] = useState(false);
  let getData = (e)=>{
    e.preventDefault();
    setIsLoading(true);
    console.log(city);
    city = city.toLocaleLowerCase().trim();
    if(city==''){
      toast.error('Please enter city name');
      return;
    }else{
      setCity('');
      fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=49d0b8f18605629e7a5d67d677f575ec&units=metric
      `).then((data)=>data.json())
      .then((res)=>{
        if(res.cod=='400'){
          setCityDetails(undefined);
          toast.error('Please enter a valid city name')
        }else if(res.cod=='404'){
          setCityDetails(undefined);
          toast.error('Please enter a valid city name')
        }
        else{
          setCityDetails(res);
        }
        console.log(res);
        setIsLoading(false);
      })
    }
  }
  return (
    <div className='mainOuter'>
      <p>Count {count}</p>
      <button style={{color:'black'}} onClick={()=>setCount(count+1)}>Click</button>
      <h1>Weather App</h1>
      <div className="wholeDiv">
        <div className="formOuter">
          <form action="" className='form' onSubmit={getData}>
            <input type="text" name='inputCity' value={city} onChange={(e)=>setCity(e.target.value)} />
            <button>Search</button>
          </form>
        </div>
        <div className="displayWeather">
          <img className={`loading ${isLoading}?''?hidden`} src={loading} alt="" />
          {cityDetails!==undefined?
            <div>
              <h2> {cityDetails.name} <span>{cityDetails.sys.country}</span></h2>
              <h1> {cityDetails.main.temp} &deg; C</h1>
              <img src={`http://openweathermap.org/img/w/${cityDetails.weather[0].icon}.png`} alt="" />
              <p>{cityDetails.weather[0].description}</p>
            </div>
            : 'No Data'
          }
        </div>
      </div>
      <ToastContainer />
    </div>
  )
}

export default App
