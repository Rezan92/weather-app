import React, { useState, useEffect } from "react";
import CityWeather from "./CityWeather";
import SearchInput from "./SearchInput";

const API_KEY = process.env.REACT_APP_API_KEY;

const CityWeatherContainer = () => {
  const [cityName, setCityName] = useState("Amsterdam");
  const [cityWeatherInfo, setCityWeatherInfo] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [ifError, setIfError] = useState({});

  useEffect(() => {
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}`;
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(URL);
        const data = await response.json();
        if (data.cod >= 400) {
          const error = new Error();
          error.data = data;
          throw error;
        } else {
          setIfError({});
          setCityWeatherInfo(data);
          setIsLoading(false);
        }
      } catch (error) {
        setIfError(error.data);
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  const handleSubmit = async () => {
    try {
      setIsLoading(true);
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
        setIsLoading(false);
      }
    } catch (error) {
      setIfError(error.data);
      setIsLoading(false);
    }
  };

  return (
    <div className="city-weather-container">
      {isLoading ? (
        <p>Loading...</p>
      ) : Object.keys(ifError).length > 0 ? (
        <p>somthing went wrong</p>
      ) : Object.keys(cityWeatherInfo).length > 0 ? (
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
