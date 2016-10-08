(function() {
  var app = angular.module('store-reviews', []);

  app.controller('ReviewController', function() {
    this.review = {};

    this.addReview = function(product) {
      this.review.createdOn = Date.now();
      product.reviews.push(this.review);
      this.review = {};
    };

  });

  app.directive('reviewForm', function() {
    return {
      restrict: 'E',
      templateUrl: 'review-form.html'
    };
  });

})();
