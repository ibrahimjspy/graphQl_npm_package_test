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
const getUserDashboardById = async (id) => {
    return axiosCall(`http://localhost:5000/orders/dashboardById/${id}`);
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
    getProductDetailsBySlug,
    getUserDashboardById
};