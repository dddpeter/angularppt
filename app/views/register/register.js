/**
 * Created by dddpe on 2016-7-22.
 */
/**
 * Created by dddpe on 2016-7-11.
 */
'use strict';

angular.module('myApp.register', ['ngCookies','myApp.directives.user','myApp.services.user'])
    .controller('registerCtrl', ['$scope','$state','$cookieStore','userService',
        function($scope,$state,$cookieStore,userService) {
        $scope.user={user:'',password:''};
        $scope.erroMsg={result:1};
        if($cookieStore.get('token')){
            var token=$cookieStore.get('token');
            userService.checkLogin(token.token)
                .success(function(){
                    $state.go('iservice');
                });

        }
        $scope.register=function(){
            userService.setEmail($scope.user.email);
            userService.setPassword(MD5($scope.user.password));
            console.log(MD5($scope.user.password));
            userService.register()
                .success(function(data){
                    console.log(data);
                    if(data.result==1){
                        console.log('注册成功！');
                        $state.go('login');
                    }
                    else{
                        console.log('注册失败！');
                        $scope.erroMsg=data;
                    }

                })
                .error(function(data){
                    console.log(data);
                    $scope.erroMsg=data;
                    console.log('注册失败！');
                });
        }
    }])
    .controller('headerCtrl', ['$scope',function($scope) {
    $scope.title='注册';
}]);