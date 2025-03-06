// Write your code here
const products = ["Laptop", "Phone", "Headphones", "Monitor"];

function logFirstProduct(name) {
  const toHaveBeenCalledWith = {
    name: name
  }
  console.log(toHaveBeenCalledWith)
}

function addProduct(name) {
  const newProduct = {
    name: name
  }
  products.push(newProduct)
}

function updateProductName(name) {
  const updatedProductName = {
    name: name
  }
  products.push(1, updatedProductName)
}

function removeLastProduct(name) {
  products.pop()
}



// Export the necessary parts for testing
module.exports = {
  logFirstProduct: typeof logFirstProduct !== 'undefined' ? logFirstProduct : undefined,
  addProduct: typeof addProduct !== 'undefined' ? addProduct : undefined,
  updateProductName: typeof updateProductName !== 'undefined' ? updateProductName : undefined,
  removeLastProduct: typeof removeLastProduct !== 'undefined' ? removeLastProduct : undefined,
  products
};
