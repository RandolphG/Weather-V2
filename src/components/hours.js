import React from "react";
import { convertTime } from "../services/helpers";
import Icon from "./icon";
function Hours(hourly) {
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
            <div>
              <Icon type={"hours"} name={"sidebar-icon"} />
              {temp}
            </div>
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
