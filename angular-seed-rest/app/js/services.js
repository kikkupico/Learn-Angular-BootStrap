angular.module('myApp.services', ['ngResource'])
  .factory('AngularIssues', function($resource){
    return $resource('http://vramak.koding.io\\:8080/api/entries/');
  })
  .value('version', '0.1');