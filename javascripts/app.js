var app = angular.module("sampleApp", ["firebase"]);

// let's create a re-usable factory that generates the $firebaseSimpleLogin instance
app.factory("simpleLogin", ["$firebaseSimpleLogin", function($firebaseSimpleLogin) {
  var ref = new Firebase("https://loginandrules.firebaseio.com/");
  return $firebaseSimpleLogin(ref);
}]);

// and use it in our controller
app.controller("loginCtrl", ["$scope", "simpleLogin", function($scope, simpleLogin) {
  $scope.auth = simpleLogin;
}])

app.controller("msgCtrl", function($scope, $firebase) {
  var ref = new Firebase("https://loginandrules.firebaseio.com/");
  var sync = $firebase(ref);
  $scope.messages = sync.$asArray();
  $scope.addMessage = function(text) {
    $scope.messages.$add({text: text});
  }
});

