(function() {
  // create a module called myApp
  var app = angular.module("myApp", []);

  var MainController = function($scope) {
    // things attacehd to $scope will be the model
  
    $scope.message = "Hello World";
    
    var me = {
      firstName: "Kiyun",
      lastName: "Kim"
    }

    $scope.me = me;
  }

  // '$http',
  app.controller('MainController', ['$scope', MainController]);


}());
