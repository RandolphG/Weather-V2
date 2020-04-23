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
