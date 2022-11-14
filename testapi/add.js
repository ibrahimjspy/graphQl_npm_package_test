/* eslint-disable valid-jsdoc */
const axios = require("axios").default;
const IP_LINK = process.env.NEXT_PUBLIC_IP_LINK;

/**
 * This is axios boilerplate used for POST REST call
 * @params route where call is transmitted
 * @example /product/list/bottoms
 */
const axiosPostCall = async (call) => {
  let Data = {};
  await axios
    .post(`${IP_LINK}/${call}`)
    .then((res) => {
      Data = res.data;
      // console.log(res.data);
    })
    .catch((err) => console.log(err));
  return Data;
};
module.exports = axiosPostCall;