angular.module('lookit')
.controller('PostsCtrl', [
  '$scope',
  'posts',
  'post',
  function($scope, posts, post){
    $scope.post = post;

    $scope.addComment = function(){
      if(!$scope.body || $scope.body == "") { return; }
      posts.addComment(post, post.id, {
        author: 'user',
        body: $scope.body,
        upvotes: 0
      });
      $scope.body = "";
    };

  }
])