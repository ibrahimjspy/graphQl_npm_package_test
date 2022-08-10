/* eslint-disable require-jsdoc */
/* eslint-disable valid-jsdoc */
const axiosCall = require('../fetch');
/**
 * Class linking orders module in middleware
 * @methods getUserDashboardById() , returns landing page dashboard data
 */
const Orders = class {
  constructor() {
  }
  /**
   * returns details of user dashboard based on userId
   * @params id should be unique user id
   */
  getUserDashboardById = async (id) => {
    return axiosCall(`orders/dashboardById/${id}`);
  };
};

module.exports = Orders;
