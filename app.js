// wrapping javascript in a closure is a good habit
(function() {
  var app = angular.module('store', []);

  app.controller('StoreController', function() {
    this.products = gems;
  });

  var gems = [
    {
      name: 'Dodecahedron',
      price: 2.95,
      description: 'Some gems have hidden qualities beyond their luster, beyond their shine... Dodeca is one of those gems.',
      canPurchase: true,
      soldOut: false
    },
    {
      name: 'Ruby',
      price: 99.99,
      description: 'Some gems have hidden qualities beyond their luster, beyond their shine... Dodeca is one of those gems.',
      canPurchase: true,
      soldOut: false
    },
    {
      name: 'Emerald',
      price: 59.99,
      description: 'Some gems have hidden qualities beyond their luster, beyond their shine... Dodeca is one of those gems.',
      canPurchase: false,
      soldOut: false
    },
    {
      name: 'Diamond',
      price: 119.95,
      description: 'Some gems have hidden qualities beyond their luster, beyond their shine... Dodeca is one of those gems.',
      canPurchase: true,
      soldOut: false
    }
  ]
})();
