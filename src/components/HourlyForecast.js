import React from "react";
import { dateConverter } from "../functions/dateConverter";

const HourlyForecast = ({ hour }) => {
  const { dt, weather, temp, feels_like } = hour;
  return (
    <div className="forecast__hourly">
      <p className="forecast__time">{dateConverter(dt)[0]}</p>
      <div className="forecast__day-container">
        <p className="forecast__day-month">{dateConverter(dt)[2]} / </p>
        <p className="forecast__day-week">{dateConverter(dt)[1]}</p>
      </div>
      <div className="forecast__image-container">
        <img
          className="forecast__image"
          src={`https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`}
          alt=""
        />
      </div>
      <p className="forecast__temp">{temp.toFixed(0)}°</p>
      <p className="forecast__temp-feel">Feels like{feels_like.toFixed(0)}°</p>
    </div>
  );
};

export default HourlyForecast;
