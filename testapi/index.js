const axiosCall = require('./fetch')

const getProductCards = async () => {
    return axiosCall('product/cards');
};
const getProductCardByCollection = async (id) => {
    return axiosCall(`product/cardsByCollectionId/${id}`);
};
const getProductDetailsBySlug = async (slug) => {
    return axiosCall(`product/details/${slug}`)
};
const getProductCategories = async () => {
    return axiosCall('categories/productCollections');
};
const getMenuCategories = async () => {
    return axiosCall('categories/menu');
};
const funcTest = () => {
    console.log("I am test function from node server ");
};
module.exports = {
    getProductCards ,
    getMenuCategories,
    funcTest,
    getProductCategories,
    getProductCardByCollection,
    getProductDetailsBySlug
};