import React, { useEffect, useState } from "react";
import { fetchData } from "./actions/fetchData";
import { useDispatch, useSelector } from "react-redux";
import "antd/dist/antd.css";
import Dashboard from "./components/dashboard";
import Carousel from "./components/carousel";
import Daily from "./components/daily";
const _ = require("lodash");

function App() {
  const [city, setCity] = useState("zagreb");
  const [weather, setWeather] = useState([]);
  const date = new Date().toDateString().toUpperCase();
  const weatherSelector = useSelector((state) => state.weatherInfo.weatherinfo);
  const dailySelector = useSelector((state) => state.hourly);
  const dispatch = useDispatch();
  const getWeatherInfoAction = (city) => dispatch(fetchData(city));

  useEffect(() => {
    let interval = null;
    getWeatherInfoAction(city);
    /*interval = setInterval(() => {
      getWeatherInfoAction(city);
    }, 10000);*/
  }, []);

  /**
   * remove element from object
   * source  https://stackoverflow.com/questions/18599242/remove-certain-elements-from-map-in-javascript
   * @returns {*}
   * @param obj
   * @param check
   */
  function removeKeyStartsWith(obj, check) {
    Object.keys(obj).forEach(function (key) {
      //if(key[0]==letter) delete obj[key];////without regex
      if (key.match("^" + check)) delete obj[key]; //with regex
    });
    return obj;
  }

  /**
   *
   * @param obj
   * @param check
   * @returns {*}
   */
  async function setKeyStartsWith(obj, check) {
    Object.keys(obj).forEach(function (key) {
      //if(key[0]==letter) delete obj[key];////without regex
      return new Promise((resolve, reject) => {
        if (key.match("^" + check)) setWeather(obj[key]); //with regex
        console.log(obj[key], "set");
        return obj[key];
      });
    });
  }

  /**
   *
   * @param time
   * @returns {string}
   */
  const convertTime = (time) => {
    const now = new Date(time * 1000);
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    return `${hours}:${minutes}:${seconds}`;
  };

  const { lat, lon, timezone, current, daily } = weatherSelector;

  if (!weatherSelector || dailySelector) {
    return <div>loading</div>;
  }

  console.log(daily);
  return (
    <div className="App">
      <div className="background">
        <div className="container">
          <div className="main">
            <div className="header">WEATHER</div>
            <Dashboard
              latitude={lat}
              longitude={lon}
              date={date}
              timezone={timezone}
              city={city}
              current={current}
              setKeyStartsWith={setKeyStartsWith}
            />
            <Carousel
              current={current}
              removeKeyStartsWith={removeKeyStartsWith}
              convertTime={convertTime}
            />
            <Daily daily={daily} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
