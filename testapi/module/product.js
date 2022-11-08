/* eslint-disable max-len */
/* eslint-disable valid-jsdoc */
/* eslint-disable require-jsdoc */
const axiosCall = require('../fetch');
/**
 * Class linking user module in middleware
 * @methods getProductCards() , returns default product cards for landing page
 * @methods getProductCardsByCategoryId() , returns product cards by something id
 * @methods getProductDetailsBySlug() , returns product details page data using slug
 * @methods getProductListPageBySlug() , returns list page products based on category id
 */
const Products = class {
  constructor() {
  }
  /**
   * returns default product cards for landing page
   */
  getProductCards = async () => {
    return axiosCall('product/cards');
  };
  /**
   * returns product cards by something id
   * @params you need to pass product category id
   */
  getProductCardsByCategoryId = async (id) => {
    return axiosCall(`product/cardsByCategoryId/${id}`);
  };
  /**
   * @returns product details page data using slug
   * @params slug should be of single product
   */
  getProductDetailsBySlug = async (slug) => {
    return axiosCall(`product/details/${slug}`); // product Slug
  };
  /**
   * returns product list page with data about all types and its
   *  relating categories
   * @params category slug should be passed
   */
  getProductListPageBySlug = async (slug) => {
    return axiosCall(`product/list/${slug}`);
  };
    /**
   * returns product details page data using slug
   * @params slug should be of single product
   */
     getProductCount = async (id) => {
      return axiosCall(`product/details/${slug}`); // product Slug
    };
};

module.exports = Products;
