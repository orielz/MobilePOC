/**
 * Created by oriel.zaken on 11/30/2015.
 */
(function(app) {

    app.config(['$stateProvider', '$urlRouterProvider', appRoutes]);

    function appRoutes($stateProvider, $urlRouterProvider) {

        $stateProvider
            .state('trading', {
                parent: 'app',
                url: '/trading',
                abstract: true,
                template: '<ui-view/>',
                controller: 'TradingController',
                controllerAs: 'Trading'
            });

        $urlRouterProvider.otherwise('/trading/rates');
    }

})(angular.module('tradency.mobile'));