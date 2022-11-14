/* eslint-disable require-jsdoc */
const axiosCall = require("../fetch");
/**
 * Class linking categories module in middleware
 * @methods getCartCheckoutBundlesByUserId(),  returns product bundles
 */
const Categories = class {
  constructor() {}
  /**
   * returns bundles of the product in cart page
   */
  getCartCheckoutBundlesByUserId = async (userId) => {
    return axiosCall(`checkout/${userId}`);
  };
};

module.exports = Categories;
