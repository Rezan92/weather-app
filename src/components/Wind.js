import React from "react";
import "../style/Wind.css";
import blade from "../assets/blade.png";

const Wind = ({ wind }) => {
  const { speed } = wind;
  return (
    <div className="wind">
      <h3 className="wind__title">Wind</h3>
      <div className="wind__container">
        <div className="wind__icon-container">
          <svg className="wind__icons" height="90" width="100">
            <path
              d="M31 18 L28 85 C 30 88, 35 88, 37 85 L37 85 L34 18"
              fill="white"
            />
            <path
              d="M70 30 L68 85 C 69 88, 74 88, 75 85 L75 85 L73 30"
              fill="white"
            />
          </svg>
          <div className="wind__blade-icon-container wind__icon-container-small">
            <img className="wind__blade-icon-small" src={blade} alt="blade" />
          </div>
          <div className="wind__blade-icon-container wind__icon-container-big">
            <img className="wind__blade-icon-big" src={blade} alt="" />
          </div>
        </div>
        <div className="wind__container-info">
          <p>Speed {speed}km/h</p>
        </div>
      </div>
    </div>
  );
};

export default Wind;
