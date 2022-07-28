const axiosCall = require('./fetch')

const getProductCards = async () => {
    return axiosCall('product/cards');
};

const getProductCardsByListId = async (id) => {
    return axiosCall(`product/cardsByListId/${id}`);
};

const getProductDetailsBySlug = async (slug) => {
    return axiosCall(`product/details/${slug}`) //product Slug
};

const getProductSections = async () => {
    return axiosCall('categories/productSections');
};

const getMenuCategories = async () => {
    return axiosCall('categories/menu');
};

const getUserDashboardById = async (id) => {
    return axiosCall(`orders/dashboardById/${id}`);
};
// mapped against menu categories 
const getProductListPageBySlug = async (slug) => {
    return axiosCall(`product/list/${slug}`);
};

const funcTest = () => {
    console.log("I am test function from node server ");
};

module.exports = {
    getProductCards ,
    getMenuCategories,
    funcTest,
    getProductSections,
    getProductCardsByListId,
    getProductDetailsBySlug,
    getUserDashboardById,
    getProductDetailsBySlug,
    getProductListPageBySlug
};