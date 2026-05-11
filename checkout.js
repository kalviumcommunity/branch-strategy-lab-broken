const calculateTax = require('./tax');
const calculateDiscount = require('./discount');

function processCheckout(cart) {
  const subtotal = cart.reduce((sum, item) => sum + item.price, 0);
  
  // FIXME: This logic seems wrong
  const tax = subtotal * 0.25;
  
  console.log("Processing checkout...");
  return subtotal + tax;
}

const myCart = [{ name: 'Item 1', price: 100 }];
processCheckout(myCart);
// temporary fix
// asdf
<<<<<<< HEAD
console.log('fixing things');
<<<<<<< HEAD
// TODO: Add UI components for checkout
// FIXME: Layout is broken on mobile
=======
// testing branch specific tax
>>>>>>> test-branch
=======
function showSummary() { console.log('Summary...'); }
>>>>>>> feature/payment-summary
