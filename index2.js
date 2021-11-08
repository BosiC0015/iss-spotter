// const { fetchMyIP } = require('./iss_promised');
// const { fetchCoordsByIP } = require('./iss_promised');
// const { fetchISSFlyOverTimes } = require('./iss_promised');
const { nextISSTimesForMyLocation } = require('./iss_promised');

const printPassTimes = function(passes) {
  for (const pass of passes) {
    let risetime = new Date();
    let duration = 0;
    risetime.setUTCSeconds(pass["risetime"]);
    duration = pass["duration"];
    console.log(`Next pass at ${risetime} for ${duration} seconds!`);
  }
};

// fetchMyIP()
// fetchCoordsByIP()
  // .then(body => {
  //   const { latitude, longitude } = JSON.parse(body)
  //   console.log({ latitude, longitude })
  // })
  // .then(fetchISSFlyOverTimes())
  // .then(body => console.log(body))
nextISSTimesForMyLocation()
  .then((passTimes) => {
    printPassTimes(passTimes);
  })
  // .catch((error) => {
  //   console.log("It didn't work!", error);
  // });