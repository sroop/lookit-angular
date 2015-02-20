angular.module('lookit', ['ui.router', 'templates'])
.config([
'$stateProvider',
'$urlRouterProvider',
function($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('home', {
      url: '/home',
      templateUrl: '/home.html',
      controller: 'MainCtrl'
    })
    .state('posts', {
      url: '/posts/{id}',
      templateUrl: '/posts.html',
      controller: 'PostsCtrl'
    });

  $urlRouterProvider.otherwise('home');
}])

.factory('posts', [function(){
  var o = {
    posts: []
  };
  return o;
}])

.controller('MainCtrl', [
  '$scope',
  'posts',
  function($scope, posts){
    $scope.posts = posts.posts;
    $scope.test = "Hello world!";
    $scope.addPost = function(){
      if(!$scope.title || $scope.title == "") { return; }
      $scope.posts.push({
        title: $scope.title,
        link: $scope.link,
        upvotes: 0,
        comments: []
      });
      $scope.title = "";
      $scope.link = "";
    };
    $scope.incrementUpvotes = function(post){
      post.upvotes += 1;
    };
  }
])

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
]);