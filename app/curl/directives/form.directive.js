angular
  .module('app')
  .directive('curlForm', curlForm);

function curlForm() {
  return {
    restrict: 'E',
    scope: {
      curl: '=',
      updateCurl: '&'
    },
    templateUrl: 'curl/directives/form.directive.html'
  };

}
