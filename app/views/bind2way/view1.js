'use strict';

angular.module('myApp.view1', [])
.controller('view1Ctrl', ['$scope',function($scope) {
  $scope.user={name:'dddpeter'};
}])
    .controller('headerCtrl', ['$scope',function($scope) {
      $scope.title='双向数据绑定';
    }]);