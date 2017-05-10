// JS for Result Page (view 2)

'use strict';

angular.module('myApp.view2', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view2', {
    templateUrl: 'view2/view2.html',
    controller: 'View2Ctrl'
  });
}])

.controller('View2Ctrl', ['$scope', '$resource', '$sanitize', 'zipService', 'keywordService', function($scope, $resource, $sanitize, zipService, keywordService) {
    $scope.keyword = keywordService.keyword;
    $scope.zip = zipService.zip;

    $scope.meetupAPI = $resource("http://api.meetup.com/find/groups?key=6752511f3291b2b182ee4d2ef312",
    { callback: "JSON_CALLBACK" },
    { get: { method: "JSONP" }});
    $scope.meetupResult = $scope.meetupAPI.get({ zip: $scope.zip, text: $scope.keyword });

    console.log($scope.meetupResult);
}]);
