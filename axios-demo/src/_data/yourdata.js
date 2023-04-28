const axios = require("axios");

module.exports = async () => {
  const res = await axios.get("https://data.cityofnewyork.us/resource/tm6d-hbzd.json");
  return res.data;
};