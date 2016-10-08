Angular mess around

if running node use npm install -g http-server. After installation cd into your project folder and run http-server -o. -o is to open browser to the page

need local server as ng-include or custom directives returning a template.html will not work due to CORS restrictions

custom directives are good as it makes the html more expressive and can show what the application is doing

can also put controller functionality into directives using controller: function(){ 'logic' } and controllerAs: 'alias name'.  Then remove from ng-conrtroller in template.html
