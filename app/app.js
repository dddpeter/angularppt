'use strict';

// Declare app level module which depends on views, and components
var app = angular.module('myApp', [
    'myApp.states',
    'myApp.common.diretive',
    'myApp.version',
])
app.run(['$rootScope', function ($rootScope) {
    $rootScope.showNav = false;
    $rootScope.menuList = [
        {name: '双向绑定', url: 'view1'},
        {name: '手风琴特效', url: 'view2'},
        {name: '指令绑定', url: 'bind1'},
        {name: '事件传播', url: 'event_test'},
        {name: '登录例子', url: 'login'},
        {name: '内置服务', url: 'iservice'},
        {name: '用户注册', url: 'register'}
    ];
    $rootScope.toggleNav = function () {
        $rootScope.showNav = !$rootScope.showNav;
    }
}]);
