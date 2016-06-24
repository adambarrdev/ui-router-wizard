
namespace app {
    'use strict';

    export interface INavController { }
    export class NavController implements INavController {

        public isCollapsed: boolean = true;

        static $inject: Array<string> = ['$rootScope', '$state'];
        constructor(private $rootScope: angular.IRootScopeService,
            public $state: angular.ui.IStateService) {

            let self = this;
            this.$rootScope.$on('$stateChangeSuccess',
                function (event, toState, toParams, fromState, fromParams) {
                    self.isCollapsed = true;
                });
        }
    }

    angular
        .module('app')
        .component('appNav', {
            controller: NavController,
            controllerAs: 'vm',
            templateUrl: 'app/layout/nav.html'
        });
}