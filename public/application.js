var appName = 'mean';
var app = angular.module(appName, []);

angular.element(document).ready(function() {
    angular.bootstrap(document, [appName]);
});
