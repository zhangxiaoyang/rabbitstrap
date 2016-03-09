'use strict';

/**
 * ServiceController
 */
app.controller('ServiceController', function($scope, Service, RelatedServices, Comments) {
  var serviceId = '1234';
  Service.get(function(d) {
    $scope.service = d;
  });
  Comments.get(function(d) {
    $scope.comments = d;
  });

  RelatedServices.get(function(d) {
    $scope.relatedServices = d;
  }, serviceId);
});
