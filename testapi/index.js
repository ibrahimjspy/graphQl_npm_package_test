/* eslint-disable valid-jsdoc */

const UserClass = require("./module/users");
const User = new UserClass("Leo", 21);

const ProductClass = require("./module/product");
const Product = new ProductClass("Leo", 10);

const CategoriesClass = require("./module/categories");
const Categories = new CategoriesClass("Leo", 10);

const OrdersClass = require("./module/orders");
const Orders = new OrdersClass("Leo", 10);

const CartClass = require("./module/cart");
const Cart = new CartClass();
/**
 * function for testing
 */
const funcTest = () => {
  console.log("I am test function from node server ");
};

module.exports = {
  User,
  Product,
  Categories,
  Orders,
  funcTest,
  Cart,
};
