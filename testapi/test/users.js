const axiosCall = require('../fetch')
/**
 * Class linking user module in middleware
 * @methods getAddToCartById() , returns add to cart data based on id
 */
let Users = class {
    constructor() {
    }
    /**
     * returns add to cart data based on id
     * @params user id 
     */
    getAddToCartById() {
        return axiosCall('product/cards');
    }
}
 
module.exports = Users;