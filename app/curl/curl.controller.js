angular
  .module('app')
  .controller('CurlController', CurlController);

function CurlController($scope, $sce) {
  $scope.curl = '';
  $scope.newCurl = $sce.trustAsResourceUrl($scope.curl);

  $scope.updateCurl = function() {
    $scope.newCurl = $sce.trustAsResourceUrl($scope.curl);
  }

}
