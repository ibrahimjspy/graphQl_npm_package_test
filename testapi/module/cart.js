/* eslint-disable require-jsdoc */
/* eslint-disable valid-jsdoc */
let axiosCall = require("../fetch");
/**
 * Class linking cart bundles module in middleware
 * @methods getCartCheckoutBundlesByUserId(),  returns product bundles
 */
const Cart = class {
  constructor() {}
  /**
   * returns bundles of the product in cart page
   */
  getCartCheckoutBundlesByUserId = async (userId) => {
    return axiosCall(`checkout/${userId}`);
  };
};

module.exports = Cart;
