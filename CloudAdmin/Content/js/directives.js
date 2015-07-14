/*== AngularJS Directives===*/
app.directive('companyDetails', function () {
    return {
        restrict: 'E',
        //template: "<p>hello</p>"
        templateUrl: '/Company/Details'
    };
});

app.directive('companyTable', function () {
    return {
        restrict: 'E',
        templateUrl: '/Company/Table',
        controller: CompanyController,
        controllerAs: 'controller'
    }
});