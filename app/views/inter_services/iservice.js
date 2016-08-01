/**
 * Created by dddpe on 2016-7-11.
 */
'use strict';

angular.module('myApp.iservice', ['myApp.services.baidu'])
    .controller('iServiceCtrl', ['$scope','$location','$http','$timeout','$interval',
        'baiduMapService','baiduMap','baiduMapFactory',
        function($scope,$location,$http,$timeout,$interval,baiduMapService,baiduMap,baiduMapFactory) {
        $scope.myUrl = $location.absUrl();
        $scope.path=$location.path();
        var city='北京';
        var weatherUrl = 'http://api.map.baidu.com/telematics/v3/weather?location=' + city + '&output=json&ak=xaONFO8QLkVFUHX8z04FTHTb1hYuoB5H';
       $scope.setSearch=function(){
           $location.search({a: 'b', c: true});
       }
        $scope.setPathSearch=function(){
            $location.path('/login').search('x=y');
        };
            /*$http(
                {
                    url: 'http://localhost:9001/users/get/email/'+'dddpeter@163.com',
                    method: 'GET',
                    dataType:'json',
                    headers:{'Content-Type':'application/json;charset=utf-8'},
                }
            ).success(function(data){
                console.log(JSON.stringify(data));
            });
*/

        $http.jsonp(weatherUrl+'&callback=JSON_CALLBACK').success(function(data){
            //console.log(data);
            $scope.data=data;
        });


            baiduMapService.getWeatherRecent('上海').then(function(data){
                $scope.data2=data;
            },function(error){
                //console.log(error);
                alert('获取天气信息失败');

            });

            baiduMap.setCityName('天津');
            baiduMap.getWeatherRecent().success(function(data){
                $scope.data3=data;
            });

            baiduMapFactory.setCityName('深圳');
            baiduMapFactory.getWeatherRecent().success(function(data){
                $scope.data4=data;
            });
        $scope.myHeader = "Hello World!";
        $scope.myTimeout=function(){
            $timeout(function () {
                $scope.myHeader = "How are you today?";
            }, 2000);
        };
            $scope.myTimer=0;
            $scope.stop=null;
            $scope.myInterval=function(){
                $scope.myTimer=0;
                $scope.stop=$interval(function(){
                    $scope.myTimer++;
                },500);
            }
            $scope.cancel=function(){
                $interval.cancel($scope.stop);
            }
    }]) .controller('headerCtrl', ['$scope',function($scope) {
    $scope.title='双向数据绑定';
}]);