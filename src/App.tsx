import './App.css';
import Title from './components/Title';
import Form from './components/Form';
import Results from './components/Results';
import { useState } from 'react';

type ResultsStateType = {
  country: string,
  cityName: string,
  temprature: string,
  conditionText: string,
  icon: string
}

function App() {
  const [city, setCity] = useState<string>("");
  const [result, setResult] = useState<ResultsStateType>({
    country: "",
    cityName: "",
    temprature: "",
    conditionText: "",
    icon: ""
  })
  const getWeather = (e: any) => {
    e.preventDefault();
    if (city === "") return;

    const API_URL: string = `https://api.weatherapi.com/v1/current.json?key=22f57e4ee40d43e5aff142443222710&q=${city}&aqi=no`

    fetch(API_URL)
      .then(res => res.json())
      .then(data => {
        setResult({
          country: data.location.country,
          cityName: data.location.name,
          temprature: data.current.temp_c,
          conditionText: data.current.condition.text,
          icon: data.current.condition.icon,
        })
      })
  }
  return (
    <div className="wrapper">
      <div className='container'>
        <Title />
        <Form setCity={setCity} getWeather={getWeather} />
        <Results result={result} />
      </div>
    </div>
  );
}

export default App;
