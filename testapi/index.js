const axios = require('axios').default;
const IP_LINK = process.env.NEXT_PUBLIC_IP_LINK
// WARN this npm package is for testing and dev purposes ,
const axiosCall = async (call) => {
    let Data = {};
    await axios.get(`${IP_LINK}/${call}`).then(
        res => {
            Data = res.data
            console.log(res)
        }
    ).catch(
        err => console.log(err)
    )
    return Data;
};
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
module.exports = {
    getProductCards ,
    getMenuCategories,
    funcTest,
    getProductCategories,
    getProductCardByCollection,
    getProductDetailsBySlug
};