/* Weather.js */

import React, { useState, useEffect } from 'react';

const Weather = () => {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const API_KEY = "af7b6f26c0d2f8f77b277c9e24f8a951"; // Replace with your actual key
  const CITY = 'London';

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${CITY}&appid=${API_KEY}&units=metric`
        );
        const data = await response.json();
        setWeather(data);
      } catch (error) {
        console.error("Failed to fetch weather:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
  }, []); // Empty dependency array means this runs once on mount

  if (loading) return <div className="card">Loading weather...</div>;
  if (!weather || weather.cod !== 200) return <div className="card">Weather data unavailable.</div>;

  return (
    <div className="card weather-widget">
      <h2>Weather in {weather.name}</h2>
      <img className="image"
        src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}.png`}
        alt={weather.weather[0].description}
      />
      <p className="temperature">{Math.round(weather.main.temp)}°C</p>
      <p className="weather-condition">{weather.weather[0].main}</p>
    </div>
  );
};

export default Weather;