import { motion } from "framer-motion";
import defaultImg from "../svg/weather/clear_sky.svg";
import Icon from "./icon";
import React from "react";

function Dashboard({ date, city, current }) {
  return (
    <div className="dashboard">
      <div className="temperature">
        <div className="actual">
          <div className="desc">
            <div className="svg">
              <motion.img
                animate={{
                  rotate: [180, 0, 180],
                }}
                transition={{
                  duration: 10,
                  ease: "easeInOut",
                  loop: Infinity,
                }}
                className="icon"
                src={defaultImg}
              />
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
