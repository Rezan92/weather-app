import React from "react";

const CityWeather = ({ cityWeatherInfo }) => {
  const { main, name, weather } = cityWeatherInfo;
  return (
    <div className="city">
      <h3 className="city__name">{name}</h3>
      <div className="city__temp-info">
        <h1 className="city__temp">{main.temp}°C</h1>
        <div className="city__temp-image-container">
          <img
            src={`https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`}
            alt={weather[0].main}
          />
          <p className="city__condition">{weather[0].main}</p>
        </div>
        <p className="city__description">{weather[0].description}</p>

        <p>
          {main.temp_max}/{main.temp_min}
        </p>
      </div>
    </div>
  );
};

export default CityWeather;
