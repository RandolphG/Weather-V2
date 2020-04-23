import React from "react";
import { convertTime } from "../services/helpers";

function Hours(hourly) {
  hourly &&
    console.log(
      "convertTime: ",
      typeof convertTime,
      "hours length",
      hourly.hours.length,
      "hours object",
      hourly.hours,
      "hours nested",
      hourly.hours.hours
    );

  return hourly.hours.hours
    ? hourly.hours.hours.map(
        ({
          dt: dayTime,
          temp,
          feels_like: feelsLike,
          pressure,
          humidity,
          dew_point: dewPoint,
          clouds,
          wind_speed: windSpeed,
          wind_deg: windDegree,
        }) => (
          <div className="hourly-info" key={dayTime}>
            <div>{convertTime(dayTime)}</div>
            <div>temp{temp}</div>
            <div>pressure{pressure}</div>
            <div>{feelsLike}</div>
            <div>{humidity}</div>
            <div>{dewPoint}</div>
            <div>{clouds}</div>
            <div>{windSpeed}</div>
            <div>{windDegree}</div>
          </div>
        )
      )
    : null;
}
export default Hours;
