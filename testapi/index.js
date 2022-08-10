const axiosCall = require('./fetch');
let UserClass = require('./test/users');
let User = new UserClass("Leo", 21);
let ProductClass = require('./test/users');
let Product = new ProductClass("Leo", 21);
/**
 * returns default product cards for landing page 
 */
const getProductCards = async () => {
    return axiosCall('product/cards');
};
/**
 * returns product cards by something id 
 * @params you need to pass product category id
 */
const getProductCardsByCategoryId = async (id) => {
    return axiosCall(`product/cardsByCategoryId/${id}`);
};
/**
 * returns product details page data using slug
 * @params slug should be of single product
 */
const getProductDetailsBySlug = async (slug) => {
    return axiosCall(`product/details/${slug}`) //product Slug
};
/**
 * returns sections and their categories/types
 */
const getProductSections = async () => {
    return axiosCall('categories/productSections');
};
/**
 * returns top menu categories , types etc
 */
const getMenuCategories = async () => {
    return axiosCall('categories/menu');
};
/**
 * returns details of user dashboard based on userId
 * @params id should be unique user id 
 */
const getUserDashboardById = async (id) => {
    return axiosCall(`orders/dashboardById/${id}`);
};
/**
 * returns product list page with data about all types and its relating categories 
 * @params category slug should be passed
 */ 
const getProductListPageBySlug = async (slug) => {
    return axiosCall(`product/list/${slug}`);
};
/**
 * function for testing
 */ 
const funcTest = () => {
    console.log("I am test function from node server ");
};

module.exports = {
    getProductCards ,
    getMenuCategories,
    funcTest,
    getProductSections,
    getProductCardsByCategoryId,
    getProductDetailsBySlug,
    getUserDashboardById,
    getProductDetailsBySlug,
    getProductListPageBySlug,
    User,
    Product
};