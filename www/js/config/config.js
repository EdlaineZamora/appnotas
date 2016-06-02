var app = angular.module('mynotes');

app.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider.state('list', {
    url: '/',
    templateUrl: 'templates/list.html'
  });

  $stateProvider.state('add', {
    url: '/add',
    templateUrl: 'templates/edit.html',
    controller: 'AddController'
  });

  $stateProvider.state('edit', {
    url: '/edit/:noteId',
    templateUrl: 'templates/edit.html',
    controller: 'EditController'
  });

  $urlRouterProvider.otherwise('/');
});