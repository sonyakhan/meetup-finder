// JS for Search Page (view 1)

'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', ['$scope', 'zipService', 'keywordService', function($scope, zipService, keywordService) {

    $scope.keyword = keywordService.keyword;
    $scope.zip = zipService.zip;
    $scope.$watch('zip', function() {
       zipService.zip = $scope.zip;
    });
    $scope.$watch('keyword', function() {
       keywordService.keyword = $scope.keyword;
    });
}]);
