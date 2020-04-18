import React, { useEffect, useState } from "react";
import DialogSelect from "./dialogSelect";
import { fetchData } from "./actions/fetchData";
import { useSelector, useDispatch } from "react-redux";
import { motion } from "framer-motion";

// third-party libraries
const _ = require("lodash");

function App() {
  const date = new Date().toDateString();
  const [city, setCity] = useState("zagreb");
  const weatherSelector = useSelector((state) => state.weatherinfo);
  const dispatch = useDispatch();
  const getWeatherInfoAction = (cities) => dispatch(fetchData(city));

  useEffect(() => {
    let interval = null;
    console.log("DEFAULT VALUE : ", city);
    getWeatherInfoAction(city);
    fetch(
      "https://weatherbit-v1-mashape.p.rapidapi.com/current?lang=en&lon=15.9819&lat=45.8150",
      {
        method: "GET",
        headers: {
          "x-rapidapi-host": "weatherbit-v1-mashape.p.rapidapi.com",
          "x-rapidapi-key":
            "3433df2959msh22e9e7607844fa5p12cb6ejsne7179ae91a96",
        },
      }
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => console.log(data))
      .catch((err) => {
        console.log(err);
      });
    // interval = setInterval(() => {
    //   getWeatherData(cities, setNewYork);
    // }, 10000);
  }, [city]);

  if (weatherSelector.length === 0) return <></>;
  const temp = weatherSelector.product.time[0].location.temperature.value;
  const windType = weatherSelector.product.time[0].location.windSpeed.name;
  const windSpeed = weatherSelector.product.time[0].location.windSpeed.mps;
  const humidity = weatherSelector.product.time[0].location.humidity.value;
  const maxTemp =
    weatherSelector.product.time[89].location.maxTemperature.value;
  const minTemp =
    weatherSelector.product.time[89].location.minTemperature.value;
  const windDirection =
    weatherSelector.product.time[0].location.windDirection.name;
  if (weatherSelector) {
    console.log("DATA..", weatherSelector);
  }
  return (
    <div className="App">
      <div className="container">
        <div className="city-date">
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -30 }}
            className="city"
          >
            {_.startCase(city)}
          </motion.div>
          <div className="date">
            <span>{date}</span>
          </div>
        </div>
        <div className="current-temp"> {temp && temp}&deg;</div>
        <div className="high-low">
          <div className="high">
            HIGH <span className={"temp-high"}>{maxTemp && maxTemp}&deg;</span>
          </div>
          <div className="low">
            LOW <span className={"temp-low"}>{minTemp && minTemp}&deg;</span>
          </div>
        </div>
        <div className="wind-humidity">
          <div className="wind">
            WIND
            <span className={"mps-direction"}>
              {windSpeed.mps}m/s {windDirection}
            </span>
          </div>
          <div className="humidity">
            HUMID
            <span className={"percent"}>{humidity}&#37;</span>
          </div>
        </div>
        <DialogSelect
          city={city}
          setCity={setCity}
          getWeatherInfoAction={getWeatherInfoAction}
        />
      </div>
    </div>
  );
}

export default App;
