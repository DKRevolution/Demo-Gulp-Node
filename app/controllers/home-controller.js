module.controller("homeCtrl", function($scope){
$scope.myInterval = 5000;
  $scope.slides = [
    {
      image: 'images/banner/banner1.png'
    },
    {
      image: 'images/banner/banner2.png'
    },
    {
      image: 'images/banner/banner3.png'
    },
    {
      image: 'images/banner/banner4.png'
    }
  ];
  
 $scope.newvar = "Hello user";

});
  
