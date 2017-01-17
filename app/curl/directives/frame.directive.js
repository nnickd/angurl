angular
  .module('app')
  .directive('curlFrame', curlFrame);

function curlFrame() {
  return {
    restrict: 'E',
    scope: {
      curl: '='
    },
    templateUrl: 'curl/directives/frame.directive.html',
  };

}
