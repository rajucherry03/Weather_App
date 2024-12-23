import React, { useState } from 'react';
import { getWeatherData } from './components/weatherAPI';
import './App.css';

function App() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState('');

  const handleChange = (e) => setCity(e.target.value);

  const fetchWeather = async () => {
    if (city) {
      const data = await getWeatherData(city);
      if (data.cod === 200) {
        setWeather(data);
        setError('');
      } else {
        setError('City not found');
        setWeather(null);
      }
    }
  };

  return (
    <div className="App flex justify-center items-center min-h-screen bg-blue-200">
      <div className="bg-white p-8 rounded-xl shadow-lg w-96">
        <h1 className="text-2xl font-bold mb-4">Weather Application</h1>
        <input
          type="text"
          placeholder="Enter city name"
          value={city}
          onChange={handleChange}
          className="border p-2 w-full mb-4"
        />
        <button onClick={fetchWeather} className="bg-blue-500 text-white p-2 w-full rounded-lg">Get Weather</button>

        {error && <p className="text-red-500 mt-4">{error}</p>}

        {weather && (
          <div className="mt-4">
            <h2 className="font-semibold">{weather.name}</h2>
            <p>Temperature: {weather.main.temp}°C</p>
            <p>Weather: {weather.weather[0].description}</p>
            <p>Humidity: {weather.main.humidity}%</p>
            <p>Wind Speed: {weather.wind.speed} m/s</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
