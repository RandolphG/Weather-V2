import { motion } from "framer-motion";
import sunshine from "../svg/sunshine.svg";
import React from "react";

const info = ({ weather, date, cityName }) => {
  return (
    <div className="top">
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
        src={sunshine}
      />
      <div className="info">
        <div className="city">{cityName && cityName.toUpperCase()}</div>
        <div className="date">
          <span>{date}</span>
        </div>
        <div className="description">
          <span>{weather && weather.description.toUpperCase()}</span>
        </div>
      </div>
    </div>
  );
};

export default info;
