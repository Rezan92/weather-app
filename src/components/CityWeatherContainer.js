import React from "react";
import Cities from "../project-data/city-weather.json";
import CityWeather from "./CityWeather";

const CityWeatherContainer = () => {
  console.log({ Cities });
  return (
    <div className="city-weather-container">
      {Cities.map((city) => (
        <CityWeather key={city.id} city={city} />
      ))}
    </div>
  );
};

export default CityWeatherContainer;
