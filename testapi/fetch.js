/* eslint-disable valid-jsdoc */
const axios = require("axios").default;
const IP_LINK = "http://3.13.238.104:4001";
/**
 * This is axios boilerplate used for REST call
 * @params route where call is transmitted
 * @example /product/list/bottoms
 */
const axiosCall = async (call) => {
  let Data = {};
  await axios.get(`${IP_LINK}/${call}`).then((res) => {
    Data = res.data;
    // console.log(res.data);
  });
  return Data;
};
module.exports = axiosCall;
