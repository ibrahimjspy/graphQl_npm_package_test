// const { request, gql } = require('graphql-request') ; 
const axios = require('axios').default;
// const IP = '172.17.0.4'
const IP_LINK ='http://localhost:4001'
// const Port = '5000'
const getProductCards = async () => {
    // console.log("graph ql api test") ;
    let Data = {};
    await axios.get(`${IP_LINK}/productCard`).then(
        res => {
            Data = res.data
            console.log(res)
        }
    ).catch(
        err => console.log(err)
    )
    return Data ;
}
const getMenuCategories = async () => {
    // console.log("graph ql api test") ;
    let Data = {};
    await axios.get(`${IP_LINK}/menuCategories`).then(
        res => {
            Data = res.data
        }
    )
    return Data ;
}
const getProductCategories = async () => {
    // console.log("graph ql api test") ;
    let Data = {};
    await axios.get(`${IP_LINK}/menuCategories/productCollections`).then(
        res => {
            Data = res.data
        }
    )
    return Data ;
}
const getProductCardByCollection = async (id) => {
    // console.log("graph ql api test") ;
    let Data = {};
    await axios.get(`${IP_LINK}/productCard/byCollectionId/${id}`).then(
        res => {
            Data = res.data
        }
    )
    return Data ;
}
const funcTest = () => {
    console.log("I am test function from node server  ");
}
module.exports = {
    getProductCards ,
    getMenuCategories,
    funcTest,
    getProductCategories,
    getProductCardByCollection
};