
namespace app {
    'use strict';

    export interface IAboutController extends IBaseController { }

    export class AboutController implements IAboutController {

        public title: string = 'About';
        public headerIcon: string = 'fa fa-info-circle';

        static $inject: Array<string> = [];
        constructor() { }

    }

    angular
        .module('app')
        .component('about', {
            controller: AboutController,
            controllerAs: 'vm',
            templateUrl: 'app/about/about.html'
        });
}