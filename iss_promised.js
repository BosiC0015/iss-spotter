const request = require('request-promise-native');

const fetchMyIP = function() {
  /*
 * Requests user's ip address from https://www.ipify.org/
 * Input: None
 * Returns: Promise of request for ip data, returned as JSON string
 */
  return request('https://api.ipify.org?format=json');
};

const fetchCoordsByIP = function(body) {
  return request('https://api.freegeoip.app/json/?apikey=14169ee0-3ddc-11ec-986c-2b8acbece23c');
};

const fetchISSFlyOverTimes = function(body) {
  const { latitude, longitude} = JSON.parse(body);
  return request(`https://iss-pass.herokuapp.com/json/?lat=${latitude}&lon=${longitude}`)
}

const nextISSTimesForMyLocation = function() {
  return fetchMyIP()
    .then(fetchCoordsByIP)
    .then(fetchISSFlyOverTimes)
    .then((data) => {
      const { response } = JSON.parse(data);
      return response;
    });
};


module.exports = { fetchMyIP };
module.exports = { fetchCoordsByIP };
module.exports = { fetchISSFlyOverTimes };
module.exports = { nextISSTimesForMyLocation };