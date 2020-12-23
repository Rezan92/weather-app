import "../style/CityWeather.css";
import React from "react";
import { MdLocationOn } from "react-icons/md";

const CityWeather = ({ cityWeatherInfo }) => {
  const { main, name, weather } = cityWeatherInfo;
  return (
    <div className="city">
      <h3 className="city__name">
        {name}
        <MdLocationOn />
      </h3>
      <div className="city__temp-info">
        <h1 className="city__temp">{main.temp}°C</h1>
        <div className="city__temp-icon-container">
          <img
            className="city__temp-icon"
            src={`https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`}
            alt={weather[0].main}
          />
        </div>
        <p className="city__condition">{weather[0].main}</p>
        <p className="city__temp-max-min">
          {main.temp_max.toFixed(0)}° / {main.temp_min.toFixed(0)}° Feels like{" "}
          {main.feels_like.toFixed(0)}°
        </p>
      </div>
    </div>
  );
};

export default CityWeather;
