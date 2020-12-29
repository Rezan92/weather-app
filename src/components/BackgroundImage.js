import React, { useState, useEffect } from "react";
import sunny from "../assets/backgroundImages/sunny.jpg";
import clear_night from "../assets/backgroundImages/clear-night.jpg";
import few_clouds from "../assets/backgroundImages/few-clouds.jpg";
import few_clouds_night from "../assets/backgroundImages/few-clouds_night.jpg";
import scattered_clouds from "../assets/backgroundImages/scattered-clouds.jpg";
import broken_clouds from "../assets/backgroundImages/broken-clouds.jpg";
import broken_clouds_night from "../assets/backgroundImages/broken-clouds_night.jpg";
import shower_rain from "../assets/backgroundImages/shower-rain.jpg";
import rain from "../assets/backgroundImages/rain.jpg";
import thunderstorm from "../assets/backgroundImages/thunderstorm.jpg";
import snow from "../assets/backgroundImages/snow.jpg";
import mist from "../assets/backgroundImages/mist.jpg";
import default_background from "../assets/backgroundImages/default.jpg";
import "../style/BackgroundImage.css";

const BackgroundImage = ({ icon }) => {
  const [image, setImage] = useState();

  useEffect(() => {
    switch (icon) {
      case "01d": //sunny
        setImage(sunny);
        break;
      case "01n": //clear night
        setImage(clear_night);
        break;
      case "02d": //few clouds
        setImage(few_clouds);
        break;
      case "02n": //few clouds night
        setImage(few_clouds_night);
        break;
      case "03d": //scattered clouds
        setImage(scattered_clouds);
        break;
      case "03n": //scattered clouds night
        setImage(few_clouds_night);
        break;
      case "04d": //broken clouds
        setImage(broken_clouds);
        break;
      case "04n": //broken clouds night
        setImage(broken_clouds_night);
        break;
      case "09d": //shower rain
        setImage(shower_rain);
        break;
      case "09n": //shower rain night
        setImage(shower_rain);
        break;
      case "10d": //rain
        setImage(rain);
        break;
      case "10n": //rain night
        setImage(rain);
        break;
      case "11d": //thunderstorm
        setImage(thunderstorm);
        break;
      case "11n": //thunderstorm night
        setImage(thunderstorm);
        break;
      case "13d": //snow
        setImage(snow);
        break;
      case "13n": //snow
        setImage(snow);
        break;
      case "50d": //mist
        setImage(mist);
        break;
      case "50n": //mist
        setImage(mist);
        break;
      default:
        setImage(default_background);
        break;
    }
  }, [icon]);

  return (
    <>
      <div
        className="background-image__container"
        style={{
          color: "blue",
          backgroundImage: `url(${image})`,
        }}
      >
        {/* <img
          className="background-image"
          src="https://cdn.pixabay.com/photo/2016/01/08/05/24/sunflower-1127174_960_720.jpg"
          alt=""
        /> */}
      </div>
    </>
  );
};

export default BackgroundImage;
