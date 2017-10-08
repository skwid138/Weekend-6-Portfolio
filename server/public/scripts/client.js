var myApp = angular.module('myApp', ['ngRoute', 'ngMaterial']);

myApp.config(function ($routeProvider, $locationProvider, $mdThemingProvider) {
  $locationProvider.hashPrefix('');

  // sets color pallet
  $mdThemingProvider.setDefaultTheme();

  /// Client Side Routes ///
  $routeProvider
    .when('/', {
      templateUrl: '/views/home.html',
      controller: 'HomeController as hc',
    })
    .when('/about',{
      templateUrl: '/views/about.html',
      controller: 'AboutController as ac'
    })
    .when('/portfolio', {
      templateUrl: '/views/portfolio.html',
      controller: 'PortfolioController as pc'
    })
    .otherwise('/'); // end routeProvider
}); // end config
