/* eslint-disable no-throw-literal */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import Form from './Form';
import Card from './Card';

const WeatherPanel = () => {
  let urlWeather = 'https://api.openweathermap.org/data/2.5/weather?&appid=56cdd6a9ec3b0492107abe99f711937a&lang=EN';
  const cityUrl = '&q=';

  let urlForecast = 'https://api.openweathermap.org/data/2.5/forecast?&appid=56cdd6a9ec3b0492107abe99f711937a&lang=EN';

  const [weather, setWeather] = useState([]);
  const [forecast, setForecast] = useState([]);
  const [loading, setLoading] = useState(false);
  const [show, setShow] = useState(false);
  const [location, setLocation] = useState('');

  const getLocation = async (loc) => {
    setLoading(true);
    setLocation(loc);

    urlWeather += cityUrl + loc;

    await fetch(urlWeather)
      .then((response) => {
        if (!response.ok) throw { response };
        return response.json();
      })
      .then((weatherData) => {
        setWeather(weatherData);
        setLoading(false);
        setShow(false);
      });

    // Forecast

    urlForecast = urlForecast + cityUrl + loc;

    await fetch(urlForecast)
      .then((response) => {
        if (!response.ok) throw { response };
        return response.json();
      })
      .then((forecastData) => {
        setForecast(forecastData);

        setLoading(false);
        setShow(true);
      })
      .catch((error) => {
        setShow(false);
      });
  };
  return (
    <>
      <Form newLocation={getLocation} />
      <Card
        showData={show}
        loadingData={loading}
        weather={weather}
        forecast={forecast}
      />
    </>
  );
};

export default WeatherPanel;
