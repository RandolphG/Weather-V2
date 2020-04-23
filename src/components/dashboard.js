import Icon from "./icon";
import React from "react";
import { Rainy } from "./weatherIcons/icons";

function Dashboard({ date, city, current }) {
  return (
    <div className="dashboard">
      <div className="temperature">
        <div className="actual">
          <div className="desc">
            <div className="svg">
              <Rainy />
            </div>
            <div className="text">
              <div className="location">
                <Icon name={"location-icon"} type={"location"} />
                <div className="text-city">{city.toUpperCase()}</div>
              </div>
              <div className="date">{date}</div>
            </div>
          </div>
          <div className="number">{current && current.temp.toFixed()}&deg;</div>
        </div>
        <div className="feels">
          <div className="text">FEELS LIKE</div>
          <div className="number">
            {current && current.feels_like.toFixed(1)}&deg;
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
