/**
 * Created by dddpe on 2016-7-8.
 */
angular.module('myApp.common.diretive', [])
    .directive('expander',function(){
    return{
        restirct:'AE',
        transclude:true,
        replace:true,
        scope:{
           list:'='
        },
        template:'<div ng-repeat="e in list" class="expander">' +
        '<div class="expander-title"  ' +
        'ng-click="e.isShow=!e.isShow"><span ng-bind="e.title"></span>' +
        '<i class="am-fr am-icon" ng-class="{true:\'am-icon-angle-down\',false:\'am-icon-angle-right\'}[e.isShow]">' +
        '</i></div>' +
        '<div ng-show="e.isShow" class="expander-content" ng-bind="e.content"></div></div>',
        link:function(scope,element,attrs){

        }
    }
})
    .directive('tabs', function() {
    return {
        restrict: 'E',
        transclude: true,
        scope: {},
        controller: [ "$scope", function($scope) {
            var panes = $scope.panes = [];

            $scope.select = function(pane) {
                angular.forEach(panes, function(p) {
                    p.selected = false;
                });
                pane.selected = true;
            }

            this.addPane = function(pane) {
                if (panes.length == 0) $scope.select(pane);
                panes.push(pane);
            }
        }],
        template:
        '<div class="tabbable">' +
        '<ul class="nav nav-tabs">' +
        '<li ng-repeat="pane in panes" ng-class="{active:pane.selected}">'+
        '<a href="" ng-click="select(pane)">{{pane.titleMe}}</a>' +
        '</li>' +
        '</ul>' +
        '<div class="tab-content" ng-transclude></div>' +
        '</div>',
        replace: true
    };
})
    .directive('pane', function() {
    return {
        require: '^tabs',
        restrict: 'E',
        transclude: true,
        scope: { titleMe: '@' },
        link: function(scope, element, attrs, tabsCtrl) {
            tabsCtrl.addPane(scope);
        },
        template:
        '<div class="tab-pane" ng-class="{active: selected}" ng-transclude>' +
        '</div>',
        replace: true
    };
})
;