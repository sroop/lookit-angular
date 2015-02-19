angular.module('lookit', ['templates'])
.controller('MainCtrl', [
  '$scope',
  function($scope){
    $scope.test = "Hello world!";
  }]);