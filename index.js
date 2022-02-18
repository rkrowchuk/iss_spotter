// const { fetchMyIP } = require('./iss');
const { fetchISSFlyOverTimes } = require('./iss');

fetchCoordsByIP("199.116.243.197", (error, coordinates) => {
  if (error) {
    console.log("It didn't work!", error);
    return;
  }
  console.log("It worked! Returned coordinates: ", coordinates);
});

fetchISSFlyOverTimes( { "latitude": 49.282, "longitude": 123.1103 }, (error, times) => {
  if (error) {
    console.log("It didn't work!", error);
    return;
  }
  console.log("It worked! It will pass at: ", times);
});

// fetchMyIP((error, ip) => {
//   if (error) {
//     console.log("It didn't work!" , error);
//     return;
//   }
//   console.log('It worked! Returned IP:' , ip);
// });