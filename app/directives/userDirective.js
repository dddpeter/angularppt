/**
 * Created by dddpe on 2016-7-22.
 */
angular.module('myApp.directives.user', ['myApp.services.user'])
    .directive('emailUnique', ['$http','userService',
        function ($http,userService) {
            return {
                require: 'ngModel',
                link: function (scope, ele, attrs, controller) {
                    //console.log(attrs.ngModel);
                    scope.$watch(attrs.ngModel, function () {
                        userService.findByEmail(ele.val())
                        .success(function (data, status, headers, cfg) {
                            controller.$setValidity('exists', data.content.count < 1);
                        }).error(function (data, status, headers, cfg) {
                            controller.$setValidity('exists', false);
                        });
                    });
                }
            }
        }]);
