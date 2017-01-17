angular
  .module('app')
  .controller('HomeController', HomeController);

function HomeController($scope, $sce) {
  $scope.curl = '';

  $scope.updateCurl = function() {
    $scope.searchedCurl = $sce.trustAsResourceUrl($scope.curl);
  }

}
