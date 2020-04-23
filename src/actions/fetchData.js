import { location } from "../data/data";

/**
 * fetch api
 * @returns {function(*): Response | void}
 * @param city
 */
export function fetchData(city) {
  let selection = "undefined";

  if (!city || "") {
    selection = getNestedObject(location, ["default"]);
  } else {
    selection = getNestedObject(location, [city]);
  }

  const { latitude, longitude } = selection || {};
  const lon = longitude;
  const lat = latitude;

  const openWeatherApi = {
    app_id: "68f7849261554f85749a74265bdc800c",
    lat: lat,
    long: lon,
    units: "metric",
  };

  const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${openWeatherApi.lat}&lon=${openWeatherApi.long}&units=${openWeatherApi.units}&appid=${openWeatherApi.app_id}`;
  console.log(`fetched from url : ${url}`);

  return async function (dispatch) {
    const requests = [
      fetch(url)
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
        .catch((err) => {
          console.log(err);
        }),
    ];
  };
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
