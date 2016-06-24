
namespace app {
    'use strict';

    export interface IComponentsController extends IBaseController { }

    export class ComponentsController implements IComponentsController {

        public title: string = 'Components';
        public headerIcon: string = 'fa fa-dashboard';

        static $inject: Array<string> = [];
        constructor() { }

    }

    angular
        .module('app')
        .component('components', {
            controller: ComponentsController,
            controllerAs: 'vm',
            templateUrl: 'app/components/components.html'
        });
}