angular
  .module('app')
  .controller('CurlController', CurlController);

function CurlController($scope, $sce) {
  $scope.curl = '';

  $scope.updateCurl = function() {
    $scope.searchedCurl = $sce.trustAsResourceUrl($scope.curl);
  }

}
