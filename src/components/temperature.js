import { avgs } from "../data/data";
import React from "react";

const temperature = ({ temp, avgs, city, month }) => {
  return (
    <div className="tmp">
      <div className="current">{temp}&deg;</div>
      <div className="avg">
        <div className="text">
          avg <span className="degrees">{avgs[city][month]}</span>&deg;
        </div>
      </div>
    </div>
  );
};

export default temperature;
