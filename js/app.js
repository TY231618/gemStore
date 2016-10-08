// wrapping javascript in a closure is a good habit
(function() {
  var app = angular.module('store', ['store-reviews', 'store-products']);

  app.controller('StoreController', ['$http', function($http) {
    // this.products = gems;
    var store = this;
    store.products = [];

    $http.get('gems.json').success(function(data) {
      store.products = data
    });

  }]);

})();
