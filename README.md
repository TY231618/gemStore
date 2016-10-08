Angular mess around

if running node use npm install -g http-server. After installation cd into your project folder and run http-server -o. -o is to open browser to the page

need local server as ng-include or custom directives returning a template.html will not work due to CORS restrictions

custom directives are good as it makes the html more expressive and can show what the application is doing

can also put controller functionality into directives using controller: function(){ 'logic' } and controllerAs: 'alias name'.  Then remove from ng-conrtroller in template.html

When you have multiple directives relating to the same thing i.e product or reviews you can refactor them to their own module.  Once done you then need to inject this new module to the original module.  Also dont forget to pull new module into html through script tag

pulled array of products into a json file then used a service ($http) in a controller to get the json file and display the products
