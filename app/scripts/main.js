"use strict";

var app = angular.module("CapWireframeApp", ["ngRoute", "ui.materialize", "chart.js"]);

app.config(function($routeProvider){
  $routeProvider.
    when('/', {
      templateUrl: 'partials/demo.html',
    }).
    otherwise('/');
});
