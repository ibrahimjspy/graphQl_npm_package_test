const axios = require('axios').default;
const IP_LINK = process.env.NEXT_PUBLIC_IP_LINK;
// This is axios boilerplate used for REST call 
const axiosCall = async (call) => {
    let Data = {};
    await axios.get(`${IP_LINK}/${call}`).then(
        res => {
            Data = res.data
            console.log(res.data)
        }
    ).catch(
        err => console.log(err)
    )
    return Data;
};
module.exports = axiosCall