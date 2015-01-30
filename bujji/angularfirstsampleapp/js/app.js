angular.module('angularappApp', [ ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/main', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/aboutus.html',
        controller: 'AboutCtrl'
      })
      .when('/contact', {
        templateUrl: 'views/contactus.html',
        controller: 'ContactCtrl'
      })
      .otherwise({
        redirectTo: '/main'
      });
  });
