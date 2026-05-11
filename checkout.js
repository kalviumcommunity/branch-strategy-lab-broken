const calculateTax = require('./tax');
const calculateDiscount = require('./discount');

function processCheckout(cart) {
  const subtotal = cart.reduce((sum, item) => sum + item.price, 0);
  
  // FIXME: This logic seems wrong
  const tax = subtotal * 0.18;
  
  console.log("Processing checkout...");
  return subtotal + tax;
}

const myCart = [{ name: 'Item 1', price: 100 }];
processCheckout(myCart);
// temporary fix
// asdf
console.log('fixing things');
function showSummary() { console.log('Summary...'); }
