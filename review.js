(function() {
  var app = angular.module('store-reviews', []);

    app.directive('reviewForm', function() {
      return {
        restrict: 'E',
        templateUrl: 'review-form.html'
      };
    });

})();
