/**
 * Created by dddpe on 2016-7-22.
 */
angular.module('myApp.services.user',['myApp.common.parameters'])
    .factory('userService',['localApi','$http',function(localApi,$http){
        var findUserByEmailUrl=localApi.baseUrl+localApi.userbyEmail;
        var userAddUrl=localApi.baseUrl+localApi.userAdd;
        var loginUrl=localApi.baseUrl+localApi.login;
        var userSerivce = {
            user: {},
            setEmail: function(email) {
                userSerivce.user['email'] = email;
            },
            setPassword:function(password){
                userSerivce.user['password'] = password;
            },
            register: function() {
                return $http(
                    {
                        url: userAddUrl,
                        method: 'POST',
                        dataType:'json',
                        headers:{'Content-Type':'application/json;charset=utf-8'},
                        data: userSerivce.user
                    });
            },
            findByEmail:function(email){
                var email=email?email:userSerivce.user.email;
                return $http(
                    {
                        url: findUserByEmailUrl+email,
                        method: 'GET',
                        dataType:'json',
                        headers:{'Content-Type':'application/json;charset=utf-8'},
                    });
            },
            login:function(isRemember){
                var isRemember=isRemember?isRemember:false;
                return $http(
                    {
                        url: loginUrl+userSerivce.user.email+'/'+userSerivce.user.password+'/'+isRemember,
                        method: 'GET',
                        dataType:'json',
                        headers:{'Content-Type':'application/json;charset=utf-8'},
                    });
            },
            checkLogin:function(token){
                return $http(
                    {
                        url: localApi.baseUrl+localApi.checkToken+token,
                        method: 'GET',
                        dataType:'json',
                        headers:{'Content-Type':'application/json;charset=utf-8'},
                    });
            }
        };
        return userSerivce;
    }]);