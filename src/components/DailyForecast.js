import React from "react";
import { dateConverter } from "../functions/dateConverter";

const DailyForecast = ({ day }) => {
  const { dt, weather, temp } = day;
  return (
    <div className="forecast-daily">
      <p className="fprecast-daily__date">
        {dateConverter(dt)[1]}, {dateConverter(dt)[2]}, {dateConverter(dt)[3]}
      </p>
      <div className="forecast-daily__image-container ">
        <img
          className="forecast-daily__image"
          src={`https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`}
          alt={`${weather[0].main}`}
        />
      </div>
      <p className="forecast-daily__max-min">
        {Math.round(temp.max)}°/{Math.round(temp.min)}°
      </p>
    </div>
  );
};

export default DailyForecast;
