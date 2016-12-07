module.config(function($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise('/home');
    
    $stateProvider
        .state('home', {
            url: '/home',
            templateUrl: 'templates/home.html'
        })
        .state('myreservations', {
           url: '/myreservations',
           templateUrl: 'templates/myreservations.html'    
        });
        
});