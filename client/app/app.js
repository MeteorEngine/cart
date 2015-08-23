ME.Payments.Products.prototype.removeItem = function (item) {
  check(item, this.itemSchema);

  var items = this.products;

  this.products = _.reject(items, function (_item) {
    return item.productId === _item.productId;
  });

  this.productDeps.changed();

  return this;
};

ME.Payments.Products.prototype.clearCart = function () {
  this.products = [];
  this.productDeps.changed();

  return this;
};
