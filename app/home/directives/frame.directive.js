angular
  .module('app')
  .directive('curlFrame', curlFrame);

function curlFrame() {
  return {
    restrict: 'E',
    scope: {
      curl: '='
    },
    templateUrl: 'home/directives/frame.directive.html'
  };

}
