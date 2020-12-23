import React, { useState, useEffect } from "react";
import CityWeather from "./CityWeather";
import SearchInput from "./SearchInput";

const API_KEY = process.env.REACT_APP_API_KEY;

const CityWeatherContainer = () => {
  const [cityName, setCityName] = useState("");
  const [cityWeatherInfo, setCityWeatherInfo] = useState({});
  const [ifError, setIfError] = useState({});

  const city = cityName.trim() !== "" ? cityName : "Amsterdam";
  useEffect(() => {
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;
    const fetchData = async () => {
      try {
        const response = await fetch(URL);
        const data = await response.json();
        if (data.cod >= 400) {
          const error = new Error();
          error.data = data;
          throw error;
        } else {
          setIfError({});
          setCityWeatherInfo(data);
        }
      } catch (error) {
        setIfError(error.data);
      }
    };
    fetchData();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const handleSubmit = async () => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}`
      );
      const data = await response.json();
      if (data.cod >= 400) {
        const error = new Error();
        error.data = data;
        throw error;
      } else {
        setIfError({});
        setCityWeatherInfo(data);
      }
    } catch (error) {
      setIfError(error.data);
    }
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
        </>
      ) : null}
    </div>
  );
};

export default CityWeatherContainer;
