Template.meCartClear.onCreated(function () {
  this.products = ME.Payments.A;
});

Template.meCartClear.events({
  'click' (e, t) {
    t.products.clearCart();
  }
});