/**
 * A promise-based wrapper around `setTimeout()`. Allows you to delay by an arbitrary number of ms
 * Ex: await delay(2000)
 *
 * @param {number} ms Number of milliseconds to wait until the promise is fulfilled
 */
function delay(ms) {
  return new Promise(res => setTimeout(res, ms));
}

module.exports = delay;
