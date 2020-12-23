import React, { useState, useEffect } from "react";
import "../style/ForecastContainer.css";
import { fetchData } from "./fetchData";
import HourlyForecast from "./HourlyForecast";

const API_KEY = process.env.REACT_APP_API_KEY;

const ForecastContainer = ({ coord }) => {
  const [forecast, setForecast] = useState({});
  const [ifError, setIfError] = useState({});

  const { lon, lat } = coord;
  const URL = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&exclude=minutely&appid=${API_KEY}`;

  useEffect(() => {
    fetchData(URL, setForecast, setIfError);
  }, [coord]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="forecast">
      {Object.keys(forecast).length > 0 ? (
        <div className="forecast__hourly-container">
          {forecast.hourly.map((hour) => (
            <HourlyForecast key={hour.dt} hour={hour} />
          ))}
        </div>
      ) : null}
    </div>
  );
};

export default ForecastContainer;
