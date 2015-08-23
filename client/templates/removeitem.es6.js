Template.meCartRemoveItem.events({
  'click' (e, t) {
    if (!ME.Payments.A) {
      throw new Error('no-cart');
    }

    const p = Template.currentData();
    console.log('Removing ' + p.name);

    ME.Payments.A.removeItem(p);
  }
});