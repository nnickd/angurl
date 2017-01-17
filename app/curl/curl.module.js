'use strict';

angular.module('app.curl', ['ngRoute'])

  .config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/', {
      templateUrl: 'curl/curl.template.html',
      controller: 'CurlController'
    });
  }])
