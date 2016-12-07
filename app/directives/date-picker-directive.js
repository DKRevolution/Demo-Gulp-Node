module.directive('calendar', function () {
    return {
        require: 'ngModel',
        link: function (scope, el, attr, ngModel) {
            $(el).datepicker({
                minDate: 0,
                dateFormat: 'MM d, yy',
				minDate: new Date(2015,12),
				maxDate: new Date(),
                onSelect: function (dateText) {
				$("#toDate").datepicker("option", "minDate", dateText),
                    scope.$apply(function () {
                        ngModel.$setViewValue(dateText);
                    });					 
                } 
            });
        }
    };
})