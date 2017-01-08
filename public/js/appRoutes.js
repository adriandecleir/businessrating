angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {

    $routeProvider

        // home page
        .when('/', {
            templateUrl: 'views/home.html',
            controller: 'MainController'
        })

        .when('/nerds', {
            templateUrl: 'views/nerd.html',
            controller: 'NerdController'
        })

        .when('/geeks', {
            templateUrl: 'views/geek.html',
            controller: 'GeekController'
        })
        .when('/register', {
            templateUrl: '/views/register.html',
            controller: 'RegisterController',
            controllerAs: 'vm'
        })
        .when('/login', {
            templateUrl: '/views/login.html',
            controller: 'LoginController',
            controllerAs: 'vm'
        })
        .when('/account', {
            templateUrl: '/views/account.html',
            controller: 'AccountController',
            controllerAs: 'vm'
        })
        .when('/account/change-password', {
            templateUrl: '/views/account-changepassword.html',
            controller: 'AccountController',
            controllerAs: 'vm'
        })
        .when('/logout', {
            templateUrl: '/views/logout.html',
            controller: 'LogoutController',
            controllerAs: 'vm'
        })
        .when('/bears', {
            templateUrl: 'views/bears.html',
            controller: 'BearController'
        });

    $locationProvider.html5Mode(true);

}]);