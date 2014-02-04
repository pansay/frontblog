angular
    .module('blog', [])
    .controller('blog', ['$scope', function ($scope) {
        
        $scope.test = 'angular !';

    }]);

window.onload = function () {

    angular.bootstrap(document.getElementById('main'), ['blog']);

}