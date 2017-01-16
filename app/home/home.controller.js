angular
  .module('app')
  .controller('HomeController', HomeController);

function HomeController($scope, $sce) {
  $scope.curl = '';

  $scope.updateUrl = function() {
    $scope.searchedUrl = $sce.trustAsResourceUrl($scope.curl);
  }

}
