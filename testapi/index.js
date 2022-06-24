// const { request, gql } = require('graphql-request') ; 
const axios = require('axios').default;

const apiCallMock = async () => {
    // console.log("APi graph ql api test") ;
    let Data = {};
    await axios.get('http://localhost:5000/').then(
        res => {
            console.log(res.data,"graph call api data from server  ") ; 
            Data = res.data
        }
    )
    return Data ;
}
const funcTest = () => {
    console.log("I am test function from node server  ");
}
// apiCallMock();
module.exports = {
    apiCallMock ,
    funcTest
};