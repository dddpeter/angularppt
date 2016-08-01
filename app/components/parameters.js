/**
 * Created by dddpe on 2016-7-22.
 */
angular.module('myApp.common.parameters', [])
.constant('localApi',{
    baseUrl:'http://localhost:9001',
    userbyEmail:'/users/get/email/',
    userAdd:'/users/add',
    login:'/users/login/',
    checkToken:'/users/checkToken/'
});