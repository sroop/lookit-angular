angular.module('lookit', ['ui.router', 'templates', 'Devise'])
.config([
'$stateProvider',
'$urlRouterProvider',
function($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('home', {
      url: '/home',
      templateUrl: 'home/_home.html',
      resolve: {
        postPromise: ['posts', function(posts){
          return posts.getAll();
        }]
      },
      controller: 'MainCtrl'
    })

    .state('posts', {
      url: '/posts/{id}',
      templateUrl: 'posts/_posts.html',
      resolve: {
        post: ['$stateParams', 'posts', function($stateParams, posts) {
          return posts.get($stateParams.id);
        }]
      },
      controller: 'PostsCtrl'
    })

    .state('login', {
      url: '/login',
      templateUrl: 'auth/_login.html',
      controller: 'AuthCtrl'
    })

    .state('register', {
      url: '/register',
      templateUrl: 'auth/_register.html',
      controller: 'AuthCtrl'
    });

  $urlRouterProvider.otherwise('home');
}])