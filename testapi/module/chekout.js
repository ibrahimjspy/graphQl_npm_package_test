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
  getCheckoutLines = async (id) => {
    return axiosCall(`checkout/${id}`);
  };
};

module.exports = Orders;