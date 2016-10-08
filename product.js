(function() {
  var app = angular.module('store-products', []);

  app.directive('productDetails', function() {
    return {
      // stands for element ie new html element
      restrict: 'E',
      templateUrl: 'product-details.html'
    };
  });

  app.directive('panelTemplate', function() {
    return {
      restrict: 'E',
      templateUrl: 'panel-template.html',
      controller: function() {
        this.tab = 1;

        this.selectTab = function(setTab) {
          this.tab = setTab;
        };

        this.isSelected = function(checkTab) {
          return this.tab === checkTab;
        };
      },
      controllerAs: 'panel'
    }
  });

})();
