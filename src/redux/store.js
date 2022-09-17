import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import forecastReducer from './redux/forecast.reducer';
import weatherReducer from './redux/weather.reducer';

const store = configureStore({
  reducer: {
    weather: weatherReducer,
    forecast: forecastReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
