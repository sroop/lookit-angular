angular.module('lookit')
.controller('PostsCtrl', [
  '$scope',
  'posts',
  '$stateParams',
  function($scope, posts, $stateParams){
    $scope.post = posts.posts[$stateParams.id];
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