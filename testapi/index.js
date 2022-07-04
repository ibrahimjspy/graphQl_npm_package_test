// const { request, gql } = require('graphql-request') ; 
const axios = require('axios').default;
const IP = '172.17.0.4'
const Port = '5000'
const getProductCards = async () => {
    // console.log("graph ql api test") ;
    let Data = {};
    await axios.get(`http://host.docker.internal:4001/productCard`).then(
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
    await axios.get(`http://host.docker.internal:4001/menuCategories`).then(
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