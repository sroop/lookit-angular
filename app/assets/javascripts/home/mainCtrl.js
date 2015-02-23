angular.module('lookit')
.controller('MainCtrl', [
  '$scope',
  'posts',
  function($scope, posts){
    $scope.posts = posts.posts;
    $scope.test = "Hello world!";
    $scope.addPost = function(){
      if(!$scope.title || $scope.title == "") { return; }
      posts.create({
        title: $scope.title,
        link: $scope.link,
        upvotes: 0,
      });
      $scope.title = "";
      $scope.link = "";
    };
    $scope.incrementUpvotes = function(post){
      post.upvotes += 1;
    };
  }
])