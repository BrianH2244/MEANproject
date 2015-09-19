angular.module('example').config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
        when('/', {
            templateURL: 'example/views/example.client.view.html'
        }).
        otherwise({
            redirectTo: '/'
        });
    }
]);