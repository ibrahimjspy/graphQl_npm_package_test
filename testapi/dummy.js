
const { request, gql } = require('graphql-request') ; 

const ApiCall = async (query) => {
    console.log("Api call function was called")
    // try {
    //     return await axios.get(process.env.GRAPHQL_API_LINK,{
    //         package
    //         // Api call parameters 
    //     })
    //   } catch (error) {
    //     console.error(error)
    //   }
    request('https://api.mocki.io/v2/c4d7a195/graphql', query).then((data) => console.log(data))
}
const GetData = async (query) =>{
    let Data = {} ;
    // const GraphQlData = ApiCall(Params).then(
    //     res => {
    //         console.log(res) ;
    //         Data = res.json()
    //     }
    // ).catch(
    //     err => {
    //         console.log(err,"Error from the call")
    //     }
    // )
    ApiCall(query)
    return Data ;
}
const string = `{
    users  {
        id
        email
        name
    }
}`
//dummy query 
const query = gql`
    ${string}
`
GetData(query)
module.exports = GetData