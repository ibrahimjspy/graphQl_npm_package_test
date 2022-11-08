/* eslint-disable require-jsdoc */
/* eslint-disable valid-jsdoc */
const axiosCall = require('../fetch');
/**
 * Class linking user module in middleware
 * @methods getCheckoutById() , returns checkout data based on id
 * @methods getShoppingCartById() , returns add to cart data based on id
 */
const Users = class {
  constructor() {
  }
  /**
   * returns shoppingCart data based on id
   * @params user id
   */
  getShoppingCartById(id) {
    return axiosCall(`user/shoppingCart/${id}`);
  }
  /**
   * returns checkout data based on id
   * @params user id
   */
  getCheckoutById(id) {
    return axiosCall(`user/checkout/${id}`);
  }
};

module.exports = Users;
