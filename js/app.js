var app = angular.module('circuitProjects', ['ngRoute']);

app.config(function ($routeProvider) {

  $routeProvider.when('/', {
    controller: 'HomeController',
    templateUrl: 'views/Home.html'
  }).when('/another1', {
    controller: 'Another1Controller',
    templateUrl: 'views/Another1.html'
  }).when('/another2', {
    controller: 'Another2Controller',
    templateUrl: 'views/Another2.html'
  }).otherwise({
    redirectTo: '/'
  });

});

