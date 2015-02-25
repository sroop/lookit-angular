angular.module('lookit')
.controller('NavCtrl', [
  '$scope',
  'Auth',
  '$state',
  function($scope, Auth, $state) {

    $scope.logout = function() {
      Auth.logout($scope.user).then(function(){
        console.log("Bye!");
        $state.go('home');
      });
    };

    Auth.currentUser().then(function (user){
      console.log(user);
      $scope.signedIn = Auth.isAuthenticated();
      $scope.user = user;
    });

    $scope.$on('devise:new-registration', function (e, user) {
      console.log("New registration");
      $scope.signedIn = Auth.isAuthenticated();
      $scope.user = user;
    });

    $scope.$on('devise:login', function (e, user) {
      console.log("Login");
      $scope.signedIn = Auth.isAuthenticated();
      $scope.user = user;
    });

    $scope.$on('devise:logout', function (e, user) {
      console.log(user.username + " is logging out...");
      $scope.signedIn = Auth.isAuthenticated();
    });

  }
])