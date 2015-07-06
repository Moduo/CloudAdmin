/*== AngularJS Controllers===*/
app.controller('CompanyController', CompanyController);

function CompanyController($scope, $http, DTOptionsBuilder, DTColumnDefBuilder) {
    var vm = this;

    vm.companies = [];

    vm.dtOptions = DTOptionsBuilder.newOptions()
        .withPaginationType('full_numbers')
        .withOption('rowCallback', rowCallback)
        .withBootstrap();

    vm.toggleCompanyDetails = function (row) {
        row = $(row);
        if (!row.hasClass('active')) {
            row.addClass('active').next('tr.company-details').removeClass('hide');
        } else {
            row.removeClass('active').next('tr.company-details').removeClass('hide');
        }
    }

    function rowCallback(nRow, aData, iDisplayIndex, iDisplayIndexFull) {
        // Unbind first in order to avoid any duplicate handler
        $('td', nRow).not('.company-details').unbind('click');
        $('td', nRow).not('.company-details').bind('click', function () {
            $scope.$apply(function () {
                vm.toggleCompanyDetails(nRow);
            });
        });
        return nRow;
    }
    

    $http.get('/Company/GetCompanies').
            success(function (data, status, headers, config) {
                vm.companies = data.companies;
            }).error(function (data, status) {
                console.log(status + ' failed to load data.');
            });
}