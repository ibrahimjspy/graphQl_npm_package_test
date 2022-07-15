const axiosCall = require('./fetch')
// WARN this npm package is for testing and dev purposes ,
// You must provide an IP link in your .env file 
const getProductCards = async () => {
    return axiosCall('productCard');
};
const getMenuCategories = async () => {
    return axiosCall('categories/menu');
};
const getProductCategories = async () => {
    return axiosCall('categories/productCollections');
};
const getProductCardByCollection = async (id) => {
    return axiosCall(`productCard/byCollectionId/${id}`);
};
const getProductDetailsBySlug = async (slug) => {
    return axiosCall(`productCard/details/${slug}`)
};
const funcTest = () => {
    console.log("I am test function from node server ");
};
getMenuCategories();
module.exports = {
    getProductCards ,
    getMenuCategories,
    funcTest,
    getProductCategories,
    getProductCardByCollection,
    getProductDetailsBySlug
};