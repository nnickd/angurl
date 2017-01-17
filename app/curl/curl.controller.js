angular
  .module('app')
  .controller('CurlController', CurlController);

function CurlController($scope, $sce) {
  $scope.curl = '';
  $scope.newCurl = $sce.trustAsResourceUrl($scope.curl);
  $scope.hide = false;

  $scope.updateCurl = function() {
    $scope.newCurl = $sce.trustAsResourceUrl($scope.curl);
  }

  $scope.hideField = function() {
    console.log($scope.hide)
    $scope.hide = !$scope.hide;
  }

}
