 const axiosCall = require('../fetch')
/**
 * Class linking user module in middleware
 * @methods getAddToCartById() , returns add to cart data based on id
 */
let Products = class {
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
 * returns product details page data using slug
 * @params slug should be of single product
 */
 getProductDetailsBySlug = async (slug) => {
    return axiosCall(`product/details/${slug}`) //product Slug
};
/**
 * returns sections and their categories/types
 */
 getProductSections = async () => {
    return axiosCall('categories/productSections');
};
}

module.exports = Products;