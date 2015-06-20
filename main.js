var app = angular.module('app', []);

app.controller('firstCtrl', function($scope, myFactory) {
  $scope.hello = "Hello world";

  $scope.myFactory = myFactory;

  $scope.getBookmark = function () {
    return "My bookmark";
  };

  $scope.setHello = function (text) {
    $scope.hello = text;
  };
});

app.factory('myFactory', function () {
  return {
    hello: function () {
      return 'hello world';
    }
  }
})
