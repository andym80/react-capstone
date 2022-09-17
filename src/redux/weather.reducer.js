import { createAsyncThunk } from '@reduxjs/toolkit';

const fetchWeather = createAsyncThunk(
  'weather/fetchWeather',
  async (location) => {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?&appid=56cdd6a9ec3b0492107abe99f711937a&lang=EN&q=${location}`,
    );

    const weatherData = await response.json();
    return weatherData;
  },
);
export default fetchWeather;
