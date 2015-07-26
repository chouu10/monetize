angular.module('MyApp', ['ngResource', 'ngMessages', 'ngRoute', 'ngAnimate', 'mgcrea.ngStrap','chart.js','ngDialog','youtube-embed', 'ui.bootstrap','chart.js'])
    .config(function ($routeProvider, $locationProvider) {
        $locationProvider.html5Mode(true);

        $routeProvider
            .when('/', {
                templateUrl: 'views/home.html',
                controller: 'MainCtrl'
            })

            .when('/login', {
                templateUrl: 'views/login.html',
                controller: 'LoginCtrl'
            })
            .when('/signup', {
                templateUrl: 'views/signup.html',
                controller: 'SignupCtrl'
            })
           .when('/rapports', {
                templateUrl: 'views/rapport.html'
            })
            .when('/admin', {
                templateUrl: 'views/admin.html',
                controller: 'AdminCtrl'
            })

            .when('/form', {
                templateUrl: 'views/form.html',
                controller: 'InfoCtrl'
            })
            .when('/search', {
                templateUrl: 'views/search.html',
                controller: 'SearchCtrl'
            })

            .when('/profile', {
                templateUrl: 'views/profile.html',
                controller: 'ProfileCtrl'
            })

            .when('/Mode-de-vie', {
                templateUrl: 'views/modeVie.html',
                controller: 'ModeVieCtrl'
            })
            .when('/High-Tech', {
                templateUrl: 'views/highTech.html',
                controller: 'HighTechCtrl'
            })
            .when('/Internet et opérateurs téléphoniques', {
                templateUrl: 'views/internet.html',
                controller: 'InternetCtrl'
            })
            .when('/Sports', {
                templateUrl: 'views/sport.html',
                controller: 'SportCtrl'
            })
            .when('/Cosmetique', {
                templateUrl: 'views/cosmetique.html',
                controller: 'CosmetiqueCtrl'
            })
            .when('/Mode', {
                templateUrl: 'views/mode.html',
                controller: 'ModeCtrl'
            })
            .when('/Habitation', {
                templateUrl: 'views/Habitation.html',
                controller: 'HabitationCtrl'
            })
            .when('/Boissons', {
                templateUrl: 'views/Boissons.html',
                controller: 'BoissonsCtrl'
            })
            .when('/Transport', {
                templateUrl: 'views/Transport.html',
                controller: 'TransportCtrl'
            })
            .when('/transfert', {
                templateUrl: 'views/transfert.html',
                controller: 'TransfertCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
    })
    .config(function ($httpProvider) {
        $httpProvider.interceptors.push(function ($rootScope, $q, $window, $location) {
            return {
                request: function (config) {
                    if ($window.localStorage.token) {
                        config.headers.Authorization = 'Bearer ' + $window.localStorage.token;
                    }
                    return config;
                },
                responseError: function (response) {
                    if (response.status === 401 || response.status === 403) {
                        $location.path('/login');
                    }
                    return $q.reject(response);
                }
            }
        });
    })
    .config(function (ChartJsProvider) {
        // Configure all charts
        ChartJsProvider.setOptions({
            colours: ['#97BBCD', '#DCDCDC', '#F7464A', '#46BFBD', '#FDB45C', '#949FB1', '#4D5360'],
            responsive: true
        });
        // Configure all doughnut charts
        ChartJsProvider.setOptions('Doughnut', {
            animateScale: true
        });
    });