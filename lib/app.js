if (typeof ME === 'undefined') {
  ME = {};
}

/**
* @contructor
*/
// ME.Cart = function () {
//   var payments = ME.Payments;

//   if (!payments) {
//     throw new Error('Payments not found');
//   }

//   this.itemSchema = {
//     storeId: String,
//     name: String,
//     description: String,
//     amount: Number
//   };

//   return this;
// };

// Set payments mode
ME.Payments.mode = 'cart';