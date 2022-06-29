// const { request, gql } = require('graphql-request') ; 
const axios = require('axios').default;

const getProductCards = async () => {
    // console.log("graph ql api test") ;
    let Data = {};
    await axios.get('http://localhost:5000/productCard').then(
        res => {
            Data = res.data
        }
    )
    return Data ;
}
const getMenuCategories = async () => {
    // console.log("graph ql api test") ;
    let Data = {};
    await axios.get('http://localhost:5000/menuCategories').then(
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
    funcTest
};