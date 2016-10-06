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
      soldOut: false,
      images: [
        {
          full: 'img/Dodecahedron300.jpg',
          thumb: 'img/DodecahedronThumb.jpg',
        }
      ]
    },
    {
      name: 'Ruby',
      price: 99.99,
      description: 'Some gems have hidden qualities beyond their luster, beyond their shine... Dodeca is one of those gems.',
      canPurchase: true,
      soldOut: false,
      images: [
        {
          full: 'img/ruby300.jpg',
          thumb: 'img/rubyThumb.jpg',
        }
      ]
    },
    {
      name: 'Emerald',
      price: 59.99,
      description: 'Some gems have hidden qualities beyond their luster, beyond their shine... Dodeca is one of those gems.',
      canPurchase: false,
      soldOut: false,
      images: [
        {
          full: 'img/emerald300.jpg',
          thumb: 'img/emeraldThumb.jpg',
        }
      ]
    },
    {
      name: 'Diamond',
      price: 119.95,
      description: 'Some gems have hidden qualities beyond their luster, beyond their shine... Dodeca is one of those gems.',
      canPurchase: true,
      soldOut: false,
      images: [
        {
          full: 'img/diamond300.jpg',
          thumb: 'img/diamondThumb.jpg',
        }
      ]
    }
  ]
})();
