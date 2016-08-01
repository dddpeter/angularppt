'use strict';

angular.module('myApp.view2', [])
.controller('view2Ctrl', ['$scope',function($scope) {
  $scope.expanders=[{title:'test1',content:'我的第一个效果',isShow:true},
    {title:'test2',content:'我的第一个效果',isShow:false},
    {title:'test3',content:'我的第一个效果',isShow:false},
    {title:'test4',content:'我的第一个效果',isShow:false}];
}]).controller('headerCtrl', ['$scope',function($scope) {
  $scope.title='手风琴效果';
}]);