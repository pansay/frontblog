angular
    .module('blog', ['ngSanitize'])
    .controller('blog', ['$scope', function ($scope) {
        
        $scope.entries = [];
        $scope.entry = {};

        $scope.saveEntry = function () {
            $scope.entries.push({title: $scope.entry.title, content: $scope.entry.content});
            console.log($scope.entries);
        }

    }])
    .filter('newlines', function () {
        return function(text) {
            return text.replace(/\n/g, '<br/>');
        }
    });

    ;

window.onload = function () {

    angular.bootstrap(document.getElementById('main'), ['blog']);

}