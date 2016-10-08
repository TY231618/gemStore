// wrapping javascript in a closure is a good habit
(function() {
  var app = angular.module('store', ['store-reviews', 'store-products']);

  app.controller('StoreController', ['$http', function($http) {
    // this.products = gems;
    var store = this;
    store.gems = [];

    $http.get('/gems.json').success(function(data) {
      store.gems = data
    });
  }]);

  // var gems = [
  //   {
  //     name: 'Dodecahedron',
  //     price: 2.95,
  //     description: 'Some gems have hidden qualities beyond their luster, beyond their shine... Dodeca is one of those gems.',
  //     canPurchase: true,
  //     soldOut: false,
  //     images: [
  //       {
  //         full: 'img/Dodecahedron300.jpg',
  //         thumb: 'img/DodecahedronThumb.jpg',
  //       }
  //     ],
  //     reviews: [
  //       {
  //         stars: '4',
  //         comment: 'Awesome product',
  //         email: 'doe@mail.com',
  //         createdOn: 1397490980837
  //       },
  //       {
  //         stars: '1',
  //         comment: 'Terrible product',
  //         email: 'jane@mail.com',
  //         createdOn: 1397490980837
  //       },
  //       {
  //         stars: '5',
  //         comment: 'Perfect product',
  //         email: 'Mike@mail.com',
  //         createdOn: 1397490980837
  //       }
  //     ]
  //   },
  //   {
  //     name: 'Ruby',
  //     price: 99.99,
  //     description: 'Some gems have hidden qualities beyond their luster, beyond their shine... Dodeca is one of those gems.',
  //     canPurchase: true,
  //     soldOut: false,
  //     images: [
  //       {
  //         full: 'img/ruby300.jpg',
  //         thumb: 'img/rubyThumb.jpg',
  //       }
  //     ],
  //     reviews: [
  //       {
  //         stars: '4',
  //         comment: 'Awesome product',
  //         email: 'doe@mail.com',
  //         createdOn: 1397490980837
  //       },
  //       {
  //         stars: '1',
  //         comment: 'Terrible product',
  //         email: 'jane@mail.com',
  //         createdOn: 1397490980837
  //       },
  //       {
  //         stars: '5',
  //         comment: 'Perfect product',
  //         email: 'Mike@mail.com',
  //         createdOn: 1397490980837
  //       }
  //     ]
  //   },
  //   {
  //     name: 'Emerald',
  //     price: 59.99,
  //     description: 'Some gems have hidden qualities beyond their luster, beyond their shine... Dodeca is one of those gems.',
  //     canPurchase: false,
  //     soldOut: false,
  //     images: [
  //       {
  //         full: 'img/emerald300.jpg',
  //         thumb: 'img/emeraldThumb.jpg',
  //       }
  //     ],
  //     reviews: [
  //       {
  //         stars: '4',
  //         comment: 'Awesome product',
  //         email: 'doe@mail.com',
  //         createdOn: 1397490980837
  //       },
  //       {
  //         stars: '1',
  //         comment: 'Terrible product',
  //         email: 'jane@mail.com',
  //         createdOn: 1397490980837
  //       },
  //       {
  //         stars: '5',
  //         comment: 'Perfect product',
  //         email: 'Mike@mail.com',
  //         createdOn: 1397490980837
  //       }
  //     ]
  //   },
  //   {
  //     name: 'Diamond',
  //     price: 119.95,
  //     description: 'Some gems have hidden qualities beyond their luster, beyond their shine... Dodeca is one of those gems.',
  //     canPurchase: true,
  //     soldOut: false,
  //     images: [
  //       {
  //         full: 'img/diamond300.jpg',
  //         thumb: 'img/diamondThumb.jpg',
  //       }
  //     ],
  //     reviews: [
  //       {
  //         stars: '4',
  //         comment: 'Awesome product',
  //         email: 'doe@mail.com',
  //         createdOn: 1397490980837
  //       },
  //       {
  //         stars: '1',
  //         comment: 'Terrible product',
  //         email: 'jane@mail.com',
  //         createdOn: 1397490980837
  //       },
  //       {
  //         stars: '5',
  //         comment: 'Perfect product',
  //         email: 'Mike@mail.com',
  //         createdOn: 1397490980837
  //       }
  //     ]
  //   }
  // ]

})();
