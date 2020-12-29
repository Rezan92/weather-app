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
        <p className="city__description">{weather[0].description}</p>
        <p className="city__temp-max-min">
          {Math.round(main.temp_max)}° / {Math.round(main.temp_min)}° Feels like{" "}
          {Math.round(main.feels_like)}°
        </p>
      </div>
    </div>
  );
};

export default CityWeather;
