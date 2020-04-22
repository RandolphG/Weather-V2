import { location } from "../data/data";

/**
 * fetch api
 * @returns {function(*): Response | void}
 * @param city
 */
export function fetchData(city) {
  if (!city || "") {
    const selection = getNestedObject(location, ["default"]);
  }
  const selection = getNestedObject(location, [city]);
  const { latitude, longitude } = selection || {};
  const lon = longitude;
  const lat = latitude;
  let hourly = null;

  const openWeatherApi = {
    app_id: "68f7849261554f85749a74265bdc800c",
    lat: lat,
    long: lon,
    units: "metric",
  };

  const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${openWeatherApi.lat}&lon=${openWeatherApi.long}&units=${openWeatherApi.units}&appid=${openWeatherApi.app_id}`;
  console.log(url);

  return async function (dispatch) {
    console.log("fetch");

    const requests = [
      await fetch(url)
        //current.
        .then((response) => {
          if (response.error) {
            throw response.error;
          }
          return response.json();
        })
        .then((data) => {
          dispatch({ type: "FETCH_DATA", payload: data });
        })
        .catch((err) => {}),
      // hourly
      await fetch(url)
        .then((response) => {
          if (response.error) {
            throw response.error;
          }
          return response.json();
        })
        .then((data) => {
          dispatch({ type: "FETCH_HOURLY", payload: data.hourly });
        })
        .catch((err) => {}),
      // daily
      await fetch(url)
        .then((response) => {
          if (response.error) {
            throw response.error;
          }
          return response.json();
        })
        .then((data) => {
          dispatch({ type: "FETCH_DAILY", payload: data.daily });
        })
        .catch((err) => {}),
    ];
  };
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
      if (key.match("^" + check))
        //with regex
        console.log(obj[key], "set");
      return obj[key];
    });
  });
}

/**
 * access nested objects with array reduce
 * source  https://dev.to/flexdinesh/accessing-nested-objects-in-javascript--9m4
 * @param nestedObj
 * @param pathArr
 * @returns {*}
 */
const getNestedObject = (nestedObj, pathArr) => {
  return pathArr.reduce(
    (obj, key) => (obj && obj[key] !== "undefined" ? obj[key] : undefined),
    nestedObj
  );
};
