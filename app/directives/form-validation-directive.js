module.directive('charactets', function () {
    return {
        require: 'ngModel',
        link: function (scope, el, attr, ngModel) {
		 alert("Dk");
          if(!ngModel) return;
		  ngModel.$parsers.unshift(function(value){
			var exp = /[^a-zA-Z]*$/i;
			if(exp.test(value)){
				ngModel.$setValidity('unique', true);
				return value;
			}else{
			  ngModel.$setValidity('unique', false);	
			  return undefined;
			}
		   });
        }
    };
})