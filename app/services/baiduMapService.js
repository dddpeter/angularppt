/**
 * Created by dddpe on 2016-7-12.
 */
angular.module('myApp.services.baidu',[])
    .value('baiduMapConsant',{
        badiuAK:'xaONFO8QLkVFUHX8z04FTHTb1hYuoB5H'
    }).config(['baiduMapProvider',function(baiduMapProvider){
    baiduMapProvider.setAccessKey('xaONFO8QLkVFUHX8z04FTHTb1hYuoB5H');
}])
    //以service方式定义的服务
    .service('baiduMapService', ['$http','$q','baiduMapConsant',function($http,$q,baiduMapConsant) {
    this.getWeatherRecent = function (cityName) {
        var defer=$q.defer();
        var weatherUrl = 'http://api.map.baidu.com/telematics/v3/weather?location='
            + cityName
            + '&output=json&ak='+baiduMapConsant.badiuAK;
       $http.jsonp(weatherUrl+'&callback=JSON_CALLBACK')
           .success(function(data){
               defer.resolve(data);
           })
           .error(
               function(data){
                   defer.reject();
               }
           );
        return defer.promise;
    }
}])
    //以factory方式定义的服务
    .factory('baiduMapFactory', ['baiduMapConsant','$http',function(baiduMapConsant,$http) {
        var apiUrl = "http://api.map.baidu.com/telematics/v3/weather";
        var accessKey=baiduMapConsant.badiuAK;
        var baiduMapWeatherService = {
            city: {},
            setCityName: function(cityName) {
                baiduMapWeatherService.city['cityName'] = cityName;
            },
            getWeatherRecent: function() {
                return $http.jsonp(apiUrl+'?location='
                    +baiduMapWeatherService.city.cityName
                    +'&output=json&ak='+ accessKey +'&callback=JSON_CALLBACK');
            }
        };
        return baiduMapWeatherService;

    }])
    //以provider方式定义的服务
    .provider('baiduMap', [function() {
        this.apiUrl = "http://api.map.baidu.com/telematics/v3/weather";
        this.accessKey='';
        this.setApiUrl=function(apiUrl){
            this.apiUrl=apiUrl;
        }
        this.setAccessKey=function(ak){
            this.accessKey=ak;
        }
        this.$get = function($http) { // injectables go here
            var self = this;
            var baiduMapWeatherService = {
                city: {},
                setCityName: function(cityName) {
                    baiduMapWeatherService.city['cityName'] = cityName;
                },
                getWeatherRecent: function() {
                    return $http.jsonp(self.apiUrl+'?location='
                        +baiduMapWeatherService.city.cityName
                        +'&output=json&ak='+ self.accessKey +'&callback=JSON_CALLBACK');
                }
            };
            return baiduMapWeatherService;
        }
    }]);