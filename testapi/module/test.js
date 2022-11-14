const cart = require("./cart");

const validator = async function () {
  const cartObj = new cart();
  const testFunc = await cartObj.getCartCheckoutBundlesByUserId("VXNlcjo0");
  console.log(testFunc);
};

validator();
