/**
 * Created by dddpe on 2016-7-22.
 */
angular.module('myApp.states', ['ui.router','oc.lazyLoad'])
    .config(['$urlRouterProvider','$stateProvider',
        function ($urlRouterProvider,$stateProvider) {
            // For any unmatched url, redirect to /state1
            $urlRouterProvider.otherwise("/view1");
            // Now set up the states
            $stateProvider
                .state('view1', {
                    url: "/view1",
                    resolve: {
                        view1: function($ocLazyLoad){
                            return $ocLazyLoad.load({name: "myApp.view1", files: ["views/bind2way/view1.js"]})
                        }
                    },
                    views:{
                        'body':{
                            controller:'view1Ctrl',
                            templateUrl:'views/bind2way/view1.html'
                        },
                        'header':{
                            controller:'headerCtrl',
                            templateUrl:'views/header/header.html'
                        }
                    }
                })
                .state('view2', {
                    url: "/view2",
                    resolve: {
                        view2: function($ocLazyLoad){
                            return $ocLazyLoad.load({name: "myApp.view2", files: ["views/expander/view2.js"]})
                        }
                    },
                    views:{
                        'body':{
                            controller:'view2Ctrl',
                            templateUrl:'views/expander/view2.html'
                        },
                        'header':{
                            controller:'headerCtrl',
                            templateUrl:'views/header/header.html'
                        }
                    }
                })
                .state('bind1', {
                    url: "/bind1",
                    resolve: {
                        bind1: function($ocLazyLoad){
                            return $ocLazyLoad.load({name: "myApp.bind1", files: ["views/bind1/bind1.js"]})
                        }
                    },
                    views:{
                        'body':{
                            controller:'Bind1Ctrl',
                            templateUrl:'views/bind1/bind1.html'
                        },
                        'header':{
                            controller:'headerCtrl',
                            templateUrl:'views/header/header.html'
                        }
                    }
                })
                .state('event_test', {
                    url: "/event_test",
                    resolve: {
                        event_test: function($ocLazyLoad){
                            return $ocLazyLoad.load({
                                name: "myApp.eventTest",
                                files: ["views/event_test/eventTest.js"]})
                        }
                    },
                    views:{
                        'body':{
                            controller:'EventCtrl',
                            templateUrl:'views/event_test/eventTest.html'
                        },
                        'header':{
                            controller:'headerCtrl',
                            templateUrl:'views/header/header.html'
                        }
                    }
                })
                .state('login', {
                    url: "/login",
                    resolve: {
                        login: function($ocLazyLoad){
                            return $ocLazyLoad.load({name: "myApp.login", files: ["views/login/login.js"]})
                        }
                    },
                    views:{
                        'body':{
                            templateUrl: 'views/login/login.html',
                            controller: 'loginCtrl'
                        },
                        'header':{
                            controller:'headerCtrl',
                            templateUrl:'views/header/header.html'
                        }
                    }
                })
                .state('iservice', {
                    url: "/iservice",
                    resolve: {
                        iservice: function($ocLazyLoad){
                            return $ocLazyLoad.load({name: "myApp.iservice", files: ["views/inter_services/iservice.js"]})
                        }
                    },
                    views:{
                        'body':{
                            templateUrl: 'views/inter_services/iservice.html',
                            controller: 'iServiceCtrl'
                        },
                        'header':{
                            controller:'headerCtrl',
                            templateUrl:'views/header/header.html'
                        }
                    }
                })
                .state('register', {
                    url: "/register",
                    resolve: {
                        register: function($ocLazyLoad){
                            return $ocLazyLoad.load(
                                {name: "myApp.iservice",
                                files: ["views/register/register.js"]})
                        }
                    },
                    views:{
                        'body':{
                            templateUrl: 'views/register/register.html',
                            controller: 'registerCtrl'
                        },
                        'header':{
                            controller:'headerCtrl',
                            templateUrl:'views/header/header.html'
                        }
                    }
                })
            
            ;
        }])