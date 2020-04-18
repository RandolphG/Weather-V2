import { location } from "../data/data";
const XML = require("pixl-xml");
/**
 * fetch api
 * @returns {function(*): Response | void}
 * @param city
 */
export function fetchData(city) {
  console.log("DISPATCHED argument passed : ", city);
  if (!city || "undefined" || null) {
    const selection = getNestedObject(location, ["default"]);
  }
  const selection = getNestedObject(location, [city]);
  const { latitude, longitude } = selection || {};
  const long = longitude;
  const lat = latitude;
  console.log("OBJECT : ", selection);

  return async function (dispatch) {
    const url = ` https://api.met.no/weatherapi/locationforecast/1.9/?lat=${lat}&lon=${long}`;
    console.log(`URL : ${url}`);
    await fetch(url)
      .then((res) => {
        if (res.error) {
          throw res.error;
          console.log(res.error);
        }
        return res.text();
      })
      .then((result) => {
        // dispatch the action using pixl-xml
        dispatch({ type: "FETCH_DATA", payload: XML.parse(result) });
      })
      .catch((error) => console.log(error));
  };
}

/**
 * access nested objects with array reduce
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

// Handle HTTP errors since fetch won't.
function handleErrors(response) {
  if (!response.ok) {
    console.log(response);
    throw Error(response.statusText);
  }
  return response;
}
