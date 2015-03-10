'use strict';

angular.module('diennguyenApp')
  .controller('MainCtrl', function ($scope, $http) {
    $scope.awesomeThings = [];

    $http.get('/api/things').success(function(awesomeThings) {
      $scope.awesomeThings = awesomeThings;
    });
        //creat an empty array
        $scope.todos =[];
    //add function
        $scope.addTodo = function() {
            $scope.todos.push($scope.todo);
            $scope.todo = '';
        };
    //remove function
        $scope.removeTodo = function(index){
            $scope.todos.splice(index,1);
        };
  });
