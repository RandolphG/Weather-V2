/**
 * convert time to string
 * @param time
 * @returns {string}
 */
export function convertTime(time) {
  const now = new Date(time * 1000);
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();
  return `${hours}:${minutes}:${seconds}`;
}

// noinspection JSUnusedLocalSymbols
/**
 * access nested objects with array reduce
 * source  https://dev.to/flexdinesh/accessing-nested-objects-in-javascript--9m4
 * @param nestedObj
 * @param pathArr
 * @returns {*}
 */
export const getNestedObject = (nestedObj, pathArr) => {
  return pathArr.reduce(
    (obj, key) => (obj && obj[key] !== "undefined" ? obj[key] : undefined),
    nestedObj
  );
};

/**
 * remove element from object
 * source  https://stackoverflow.com/questions/18599242/remove-certain-elements-from-map-in-javascript
 * @returns {*}
 * @param obj
 * @param check
 */
export function removeKeyStartsWith(obj, check) {
  Object.keys(obj).forEach(function (key) {
    //if(key[0]==letter) delete obj[key];////without regex
    if (key.match("^" + check)) delete obj[key]; //with regex
  });
  return obj;
}
