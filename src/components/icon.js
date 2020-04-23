import defaultImg from "../svg/weather/clear_sky.svg";
import React from "react";
import dew from "../svg/dew.svg";
import uv from "../svg/_suncream.svg";
import sunrise from "../svg/_sunrise.svg";
import windSpeed from "../svg/_wind-speed.svg";
import clouds from "../svg/_clouds.svg";
import degree from "../svg/_direciton.svg";
import humidity from "../svg/_humidity.svg";
import barometer from "../svg/_barometer.svg";
import sunset from "../svg/_sunsets.svg";
import location from "../svg/_location_c.svg";
import hours from "../svg/_hourly.svg";

const icon = ({ name, type }) => {
  const checkType = (type) => {
    switch (type) {
      case "dew":
        return dew;
      case "uv":
        return uv;
      case "sunrise":
        return sunrise;
      case "wind-speed":
        return windSpeed;
      case "clouds":
        return clouds;
      case "degree":
        return degree;
      case "humidity":
        return humidity;
      case "pressure":
        return barometer;
      case "location":
        return location;
      case "sunsets":
        return sunset;
      case "hours":
        return hours;
      default:
        return defaultImg;
    }
  };

  return (
    <div className="svg">
      <img
        alt="icon-svg"
        className={name ? name : "icon"}
        src={checkType(type)}
      />
    </div>
  );
};

export default icon;
