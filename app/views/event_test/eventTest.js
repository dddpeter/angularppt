/**
 * Created by dddpe on 2016-7-11.
 */
'use strict';
angular.module('myApp.eventTest', [])
    .run(['$rootScope',function($rootScope){
        $rootScope.count=0;
        $rootScope.$on('addEvent1',function(){
            //$rootScope.$broadcast('addEvent');
        });
    }])
    .controller('EventCtrl', ['$scope','$window',function($scope,$window) {
        $scope.count=0;
        $scope.$on('addEvent1',function(){
            $scope.count++;
        });
        $scope.$on('addEvent',function(){
            $scope.count++;
        });
        $scope.$on('addEvent2',function(){
            $scope.count++;
        });
    }])
    .controller('childCtrl', ['$scope',function($scope) {
        $scope.count=0;
        $scope.$on('addEvent1',function(){
            $scope.count++;
        });
        $scope.$on('addEvent2',function(){
            $scope.count++;
        });
        $scope.$on('addEvent',function(){
            $scope.count++;
        });
    }])
    .controller('brotherCtrl', ['$scope',function($scope) {
        $scope.count=0;
        $scope.$on('addEvent1',function(){
            $scope.count++;
        });
        $scope.$on('addEvent2',function(){
            $scope.count++;
        });
        $scope.$on('addEvent',function(){
            $scope.count++;
        });
    }])
    .controller('headerCtrl', ['$scope',function($scope) {
    $scope.title='事件传播';
}]);