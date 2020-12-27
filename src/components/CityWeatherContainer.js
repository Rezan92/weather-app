import React, { useState, useEffect } from "react";
import { fetchData } from "../functions/fetchData";
import CityWeather from "./CityWeather";
import SearchInput from "./SearchInput";
import ForecastContainer from "./ForecastContainer";
import Humidity from "./Humidity";

const API_KEY = process.env.REACT_APP_API_KEY;

const CityWeatherContainer = () => {
  const [cityName, setCityName] = useState("");
  const [cityWeatherInfo, setCityWeatherInfo] = useState({});
  const [ifError, setIfError] = useState({});

  const city = cityName.trim() !== "" ? cityName : "Amsterdam";
  const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`;

  useEffect(() => {
    fetchData(URL, setCityWeatherInfo, setIfError);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const handleSubmit = () => {
    fetchData(URL, setCityWeatherInfo, setIfError);
    setCityName("");
  };

  return (
    <div className="city-weather-container">
      {Object.keys(cityWeatherInfo).length > 0 ? (
        <>
          <SearchInput
            cityName={cityName}
            setCityName={setCityName}
            handleSubmit={handleSubmit}
          />
          <CityWeather
            key={cityWeatherInfo.id}
            cityWeatherInfo={cityWeatherInfo}
          />
          <ForecastContainer coord={cityWeatherInfo.coord} />
          <Humidity main={cityWeatherInfo.main} />
        </>
      ) : null}
    </div>
  );
};

export default CityWeatherContainer;
