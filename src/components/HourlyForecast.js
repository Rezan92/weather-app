import React from "react";
import { dateConverter } from "../functions/dateConverter";

const HourlyForecast = ({ hour }) => {
  const { dt, weather, temp, feels_like } = hour;
  return (
    <div className="forecast-hourly">
      <p className="forecast-hourly__time">{dateConverter(dt)[0]}</p>
      <div className="forecast-hourly__day-container">
        <p className="forecast-hourly__day">
          {dateConverter(dt)[2]} / {dateConverter(dt)[1]}
        </p>
      </div>
      <div className="forecast-hourly__image-container image-container ">
        <img
          className="forecast-hourly__image image"
          src={`https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`}
          alt={`${weather[0].main}`}
        />
      </div>
      <p className="forecast-hourly__temp">{Math.round(temp)}°</p>
      <p className="forecast-hourly__temp-feel">
        Feels like{Math.round(feels_like)}°
      </p>
    </div>
  );
};

export default HourlyForecast;
