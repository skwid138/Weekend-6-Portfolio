var myApp = angular.module('myApp', ['ngRoute']);

/// Client Side Routes ///
myApp.config(function($routeProvider, $locationProvider) {
  $locationProvider.hashPrefix('');

  $routeProvider
    .when('/', {
      templateUrl: '/views/user.html',
      controller: 'UserController as uc',
    })
    .when('/home',{
      templateUrl: '/views/home.html',
      controller: 'HomeController as hc'
    })
    .when('/portfolio', {
      templateUrl: '/views/portfolio.html',
      controller: 'PortfolioController as pc'
    })
    .otherwise('/home'); // end routeProvider
}); // end config
