/**
 * Created by dddpe on 2016-7-11.
 */
'use strict';

angular.module('myApp.login', ['ngCookies','myApp.services.user'])
    .controller('loginCtrl', ['$scope','$state','$cookieStore','$cookies','userService',
        function($scope,$state,$cookieStore,$cookies,userService) {
        $scope.user={};
        $scope.erroMsg={result:1};
            if($cookieStore.get('token')){
                var token=$cookieStore.get('token');
                userService.checkLogin(token.token)
                    .success(function(data){
                        if(data.result==1){
                            $state.go('iservice');
                        }
                    });

            }
        $scope.login=function(){
            var  password=MD5($scope.user.password);
            userService.setEmail($scope.user.email);
            userService.setPassword(password);
            userService.login($scope.user.isRemember)
                .success(function(data){
                    if(data.result==1){
                        console.log('登录成功！');
                        var expires = data.content.user[0].expires/60.00/60/24;
                        var date=new Date();
                        console.log(date);
                        date.setDate(date.getDate()+expires);
                        console.log(date);
                        $cookies.put(
                            'token',
                            JSON.stringify(data.content.user[0]),
                            {'expires':date});
                        $state.go('iservice');
                    }
                    else{
                        console.log('登录失败！');
                        $scope.erroMsg=data.msg;
                    }
                })
                .error(
                    function(data){
                        console.log('登录失败！');
                        $scope.erroMsg=data;
                    }
                );
        }
    }]).controller('headerCtrl', ['$scope',function($scope) {
    $scope.title='登录';
}]);