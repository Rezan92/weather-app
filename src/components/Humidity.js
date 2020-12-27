import React from "react";
import "../style/Humidity.css";

const Humidity = ({ main }) => {
  const { humidity, feels_like, pressure } = main;
  const raduis = 50;
  const circumference = raduis * 2 * Math.PI - 64;
  const arcLength = (circumference * humidity) / 100; // The inner part
  const strokeDashoffsetValue = circumference - arcLength; //The outer part

  return (
    <div className="humidity">
      <h3 className="humidity__title">Comfort level</h3>
      <div className="humidity__container">
        <div className="humidity__progress">
          <p className="humidity__progress-title">Humidity</p>
          <svg className="humidity__progress-ring" width="110" height="110">
            <circle
              className="humidity__progress-ring__circle-outer humidity-circle"
              cx="55"
              cy="55"
              r={`${raduis}`}
            ></circle>
            <circle
              className="humidity__progress-ring__circle-inner humidity-circle"
              strokeDashoffset={`${strokeDashoffsetValue}`}
              cx="55"
              cy="55"
              r={`${raduis}`}
            ></circle>
          </svg>
          <span className="humidity__progress-start">0</span>
          <span className="humidity__progress-end">100</span>
          <span className="humidity__data">{humidity}%</span>
        </div>
        <div className="humidity__info">
          <p className="humidity__info-feels-like">
            Feels like {Math.round(feels_like)}°
          </p>
          <p className="humidity__info-pressure">Pressure {pressure}mb</p>
        </div>
      </div>
    </div>
  );
};

export default Humidity;
