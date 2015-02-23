angular.module('lookit')
.controller('PostsCtrl', [
  '$scope',
  'posts',
  'post',
  function($scope, posts, post){
    $scope.post = post;
    $scope.addComment = function(){
      $scope.post.comments.push({
        author: 'user',
        body: $scope.body,
        upvotes: 0
      });
      $scope.body = "";
    };
  }
])