/**
 * Created by dddpe on 2016-7-8.
 */
'use strict';

angular.module('myApp.bind1', [])

    .controller('Bind1Ctrl', ['$scope',function($scope) {
        $scope.value='这里是来自Controller的文字';
        $scope.show=function(){
            alert($scope.value);
        }
        $scope.show1=function(name){
            alert(name);
        }
    }])

    .directive('bind1',function(){
    return{
        restirct:'AE',
        transclude:true,
        replace:true,
        scope:{
            myValue:'@tValue',
        },
        template:'<form class="am-form am-form-horizontal"> ' +
        '<div class="am-form-group"> ' +
        '<label for="doc-ipt-3" class="am-u-sm-3 am-form-label">' +
        '@绑定</label> <div class="am-u-sm-9"> ' +
        '<input type="text" ng-model="myValue" id="doc-ipt-3" placeholder="请输入内容"> ' +
        '<p>' +
        '<button ' +
        '      type="button"' +
        '      class="am-btn am-btn-primary" ' +
        '     ng-click="myValue=\'通过@绑定指令修改\'">' +
        '修改指令里面的文字' +
        '</button>' +
        '</div> ' +
        '</div> ' +
        '</form>'
    }
})
    .directive('bind2',function(){
        return{
            restirct:'AE',
            transclude:true,
            replace:true,
            scope:{
                myValue:'=tValue',
            },
            template:'<form class="am-form am-form-horizontal"> ' +
            '<div class="am-form-group"> ' +
            '<label for="doc-ipt-3" class="am-u-sm-3 am-form-label">' +
            '=绑定</label> <div class="am-u-sm-9"> ' +
            '<input type="text" ng-model="myValue" id="doc-ipt-3" placeholder="请输入内容"> ' +
            '<p><button type="button" class="am-btn am-btn-primary" ng-click="myValue=\'通过=绑定指令修改\'">修改指令里面的文字</button>' +
            '</div> </div> </form>'
        }
    }).directive('bind3',function(){
    return{
        restirct:'AE',
        transclude:true,
        replace:true,
        scope:{
            showAlert:'&',
            showAlertMy:'&'
        },
        template:'<form class="am-form am-form-horizontal"> ' +
        '<p><button type="button" class="am-btn am-btn-primary" ng-click="showAlert()">显示警告</button></p>' +
        '<div class="am-form-group"> ' +
        '<label for="doc-ipt-3" class="am-u-sm-3 am-form-label">' +
        '&绑定</label> <div class="am-u-sm-9" ng-init="my=\'Peter\'"> ' +
        '<input type="text" ng-model="my" id="doc-ipt-3" placeholder="请输入内容"></div> ' +
        '</form>'+
        '<p><button type="button" class="am-btn am-btn-primary" ng-click="showAlertMy({name:my})">显示警告(带参数)</button></p>'
    }
})

    .controller('headerCtrl', ['$scope',function($scope) {
        $scope.title='指令绑定';
    }]);