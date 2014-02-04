angular
    .module('blog', ['ngSanitize', 'firebase'])
    .controller('blog', ['$scope', '$firebase', function ($scope, $firebase) {

        var entriesRef = new Firebase("https://rhbe8cr3bcu.firebaseio-demo.com/");

        $scope.entries = $firebase(entriesRef);
        
        //$scope.entries = [];
        $scope.entry = {};

        $scope.saveEntry = function () {
            //$scope.entries.push({title: $scope.entry.title, content: $scope.entry.content});
            $scope.entries.$add($scope.entry);
            console.log($scope.entries);
        }

    }])
    .filter('newlines', function () {
        return function(text) {
            return text.replace(/\n/g, '<br/>');
        }
    });


window.onload = function () {

    angular.bootstrap(document.getElementById('main'), ['blog']);

}