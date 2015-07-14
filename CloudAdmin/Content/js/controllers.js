/*== AngularJS Controllers===*/
function CompanyController($compile, $scope, $http, DTOptionsBuilder, DTColumnDefBuilder) {
    var vm = this;
    
    vm.companies = [];
    // Array to track the ids of the details displayed rows
    var detailRows = [];

    vm.dtOptions = DTOptionsBuilder.newOptions()
        .withPaginationType('full_numbers')
        .withBootstrap();

    $scope.$on('event:dataTableLoaded', function (event, loadedDT) {
        
        var dt = loadedDT.DataTable;
        $('#company_table tbody').on('click', 'tr td', function () {
            var tr = $(this).closest('tr');
            var row = dt.row(tr);
            var idx = $.inArray(tr.attr('id'), detailRows);

            if (row.child.isShown()) {
                tr.removeClass('details');
                row.child.hide();

                // Remove from the 'open' array
                detailRows.splice(idx, 1);
            }
            else {
                tr.addClass('details');
                row.child($compile("<company-details></company-details>")($scope)).show();
                // Add to the 'open' array
                if (idx === -1) {
                    detailRows.push(tr.attr('id'));
                }
            }
        });

        // On each draw, loop over the `detailRows` array and show any child rows
        dt.on('draw', function () {
            $.each(detailRows, function (i, id) {
                $('#' + id + ' td:first-child').trigger('click');
            });
        });
    });


    $http.get('/Company/GetCompanies').
            success(function (data, status, headers, config) {
                vm.companies = data.companies;
            }).error(function (data, status) {
                console.log(status + ' failed to load data.');
            });
}