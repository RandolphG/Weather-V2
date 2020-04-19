import iconWindDark from "../svg/wind-dark.svg";
import iconSpeedDark from "../svg/acceleration.svg";
import React from "react";

const windInfo = ({ windDir, windSpeed }) => {
  return (
    <div className="wind">
      <div className="text">
        <img alt={"wind"} className={"icon-wind"} src={iconWindDark} />
        <span className={"direction"}>{windDir}</span>
      </div>
      <div className="speed-text">
        <img alt={"wind-speed"} className={"icon-speed"} src={iconSpeedDark} />
        <span className={"wind-spd"}>{windSpeed}ms</span>
      </div>
    </div>
  );
};

export default windInfo;
