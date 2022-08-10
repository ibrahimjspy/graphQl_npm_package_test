/* eslint-disable require-jsdoc */
const axiosCall = require('../fetch');
/**
 * Class linking categories module in middleware
 * @methods getProductSections(),  returns product categories and sections
 * @methods getMenuCategories(),  returns top menu categories
 */
const Categories = class {
  constructor() {
  }
  /**
  * returns sections and their categories/types
  */
  getProductSections = async () => {
    return axiosCall('categories/productSections');
  };
  /**
  * returns top menu categories , types etc
  */
  getMenuCategories = async () => {
    return axiosCall('categories/menu');
  };
};

module.exports = Categories;
