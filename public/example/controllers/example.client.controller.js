// Retrieves the example module, used controller method to create a new ExampleController constructor function
// Applied dependency injection to inject the $scope object
angular.module('example').controller('ExampleController', ['$scope',
// Used the $scope object to define a name property, later to be used by view
    function($scope) {
        $scope.name = 'MEAN Application';
    }
]);