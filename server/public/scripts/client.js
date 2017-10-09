var myApp = angular.module('myApp', ['ngRoute', 'ngMaterial']);

myApp.config(function ($routeProvider, $locationProvider, $mdThemingProvider) {
  $locationProvider.hashPrefix('');

  // sets color pallet for cards
  $mdThemingProvider.setDefaultTheme();

  /// Client Side Routes ///
  $routeProvider.when('/', {
      templateUrl: '/views/home.html',
      controller: 'HomeController as hc',
    }).otherwise('/'); // end routeProvider
}); // end config
