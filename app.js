// wrapping javascript in a closure is a good habit
(function() {
  var app = angular.module('store', []);

  app.controller('StoreController', function() {
    this.products = gems;
  });

  app.controller('PanelController', function() {
    this.tab = 1;

    this.selectTab = function(setTab) {
      this.tab = setTab;
    };

    this.isSelected = function(checkTab) {
      return this.tab === checkTab;
    };

  });

  app.controller('ReviewController', function() {
    this.review = {};
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
      ],
      reviews: [
        {
          stars: '4',
          comment: 'Awesome product',
          email: 'doe@mail.com'
        },
        {
          stars: '1',
          comment: 'Terrible product',
          email: 'jane@mail.com'
        },
        {
          stars: '5',
          comment: 'Perfect product',
          email: 'Mike@mail.com'
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
      ],
      reviews: [
        {
          stars: '4',
          comment: 'Awesome product',
          email: 'doe@mail.com'
        },
        {
          stars: '1',
          comment: 'Terrible product',
          email: 'jane@mail.com'
        },
        {
          stars: '5',
          comment: 'Perfect product',
          email: 'Mike@mail.com'
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
      ],
      reviews: [
        {
          stars: '4',
          comment: 'Awesome product',
          email: 'doe@mail.com'
        },
        {
          stars: '1',
          comment: 'Terrible product',
          email: 'jane@mail.com'
        },
        {
          stars: '5',
          comment: 'Perfect product',
          email: 'Mike@mail.com'
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
      ],
      reviews: [
        {
          stars: '4',
          comment: 'Awesome product',
          email: 'doe@mail.com'
        },
        {
          stars: '1',
          comment: 'Terrible product',
          email: 'jane@mail.com'
        },
        {
          stars: '5',
          comment: 'Perfect product',
          email: 'Mike@mail.com'
        }
      ]
    }
  ]
})();
