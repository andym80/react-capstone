/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import React from 'react';
import Spinner from './Spinner';

const Card = ({
  loadingData, showData, weather, forecast,
}) => {
  const today = new Date();
  const day = today.getDate();
  const month = today.getMonth() + 1;
  const year = today.getFullYear();
  const date = `${day}/${month}/${year}`;

  let url = '';
  let iconUrl = '';

  if (loadingData) {
    return <Spinner />;
  }

  if (showData) {
    url = 'https:openweathermap.org/img/wn/';
    iconUrl = 'url + weather.weather[0].icon} +.png';

    iconUrl = `${url + forecast.list[1].weather[0].icon}.png`;
    iconUrl = `${url + forecast.list[2].weather[0].icon}.png`;
    iconUrl = `${url + forecast.list[3].weather[0].icon}.png`;

    forecastDate3 = `${forecast.list[1].dt_txt.substring(8, 10)}/${forecast.list[1].dt_txt.substring(5, 7)}/${forecast.list[1].dt_txt.substring(0, 4)} ${forecast.list[1].dt_txt.substring(11, 13)}`;
    forecastDate6 = `${forecast.list[2].dt_txt.substring(8, 10)}/${forecast.list[2].dt_txt.substring(5, 7)}/${forecast.list[2].dt_txt.substring(0, 4)} ${forecast.list[2].dt_txt.substring(11, 13)}`;
    forecastDate9 = `${forecast.list[3].dt_txt.substring(8, 10)}/${forecast.list[3].dt_txt.substring(5, 7)}/${forecast.list[3].dt_txt.substring(0, 4)} ${forecast.list[3].dt_txt.substring(11, 13)}`;
  }

  return (
    <div className="mt-5">
      {
      showData === true ? (
        <div className="container">
          <div className="card mb-3 mx-auto bg-dark text-light">
            <div className="row g-0">
              <div className="col-md-4">
                <h3 className="card-title">{weather.name}</h3>
                <p className="card-date">{date}</p>
                <h1 className="card-temp">
                  {(weather.main.temp - 273.15).toFixed(1)}
                  ºC
                </h1>
                <p className="card-desc">
                  <img src={iconUrl} alt="icon" />
                  {weather.weather[0].description}
                </p>
                <img src="https://images.pexels.com/photos/9363586/pexels-photo-9363586.jpeg?cs=srgb&dl=pexels-tropojan-eagle-9363586.jpg&fm=jpg" className="img-fluid rounded-start" alt="..." />
              </div>

              <div className="col-md-8">
                <div className="card-body text-start mt-2">
                  <h5 className="card-text">
                    Max Temperature:
                    {(weather.main.temp_max - 273.15).toFixed(1)}
                    ºC
                  </h5>
                  <h5 className="card-text">
                    Min Temperature:
                    {(weather.main.temp_min - 273.15).toFixed(1)}
                    ºC
                  </h5>
                  <h5 className="card-text">
                    thermal sensation:
                    {(weather.main.feels_like - 273.15).toFixed(1)}
                    ºC
                  </h5>
                  <h5 className="card-text">
                    Humidity:
                    {weather.main.humidity}
                    %
                  </h5>
                  <h5 className="card-text">
                    Wind Speed:
                    {weather.wind.speed}
                    m/s
                  </h5>
                </div>
                <hr />

                <div className="row mt-4">
                  <div className="col">
                    <p>
                      {forecastDate3}
                      h
                    </p>
                    <p className="description">
                      <img src={iconUrl} alt="icon" />
                      {forecast.list[1].weather[0].description}
                    </p>
                    <p className="temp">
                      {(forecast.list[1].main.temp - 273.15).toFixed(1)}
                      ºC
                    </p>
                  </div>
                  <div className="col">
                    <p>
                      {forecastDate6}
                      h
                    </p>
                    <p className="description">
                      <img src={iconUrl} alt="icon" />
                      {forecast.list[2].weather[0].description}
                    </p>
                    <p className="temp">
                      {(forecast.list[2].main.temp - 273.15).toFixed(1)}
                      ºC
                    </p>
                  </div>
                  <div className="col">
                    <p>
                      {forecastDate9}
                      h
                    </p>
                    <p className="description">
                      <img src={iconUrl} alt="icon" />
                      {forecast.list[3].weather[0].description}
                    </p>
                    <p className="temp">
                      {(forecast.list[3].main.temp - 273.15).toFixed(1)}
                      ºC
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <h2 className="text-center">search by city</h2>
      )
    }
    </div>
  );
};
export default Card;
