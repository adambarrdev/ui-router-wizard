
namespace app {
    'use strict';

    export interface IBaseController {
        title: string;
        headerIcon: string;
    }

    appConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
    function appConfig($stateProvider: angular.ui.IStateProvider, $urlRouterProvider: angular.ui.IUrlRouterProvider) {

        $stateProvider
            .state('home', {
                abstract: true,
                url: '',
                template: '<home></home>'
            })
            .state('home.step1', {
                url: '/',
                template: '<h1>Step 1</h1>'
            })
            .state('home.step2', {
                url: '/step2',
                template: '<h1>Step 2</h1>',
                data: {
                    prev: 'home.step1'
                }
            })
            .state('home.step3', {
                url: '/step3',
                template: '<h1>Step 3</h1>',
                data: {
                    prev: 'home.step2'
                }
            })
            .state('home.step4', {
                url: '/step4',
                template: '<h1>Step 4</h1>',
                data: {
                    prev: 'home.step3'
                }
            })
            .state('home.step5', {
                url: '/step5',
                template: '<h1>Step 5</h1>',
                data: {
                    prev: 'home.step4'
                }
            })
            .state('home.step6', {
                url: '/step6',
                template: '<h1>Step 6</h1>',
                data: {
                    prev: 'home.step5'
                }
            })
            .state('home.step7', {
                url: '/step7',
                template: '<h1>Step 7</h1>',
                data: {
                    prev: 'home.step6'
                }
            })
            .state('about', {
                url: '/about',
                template: '<about></about>'
            })
            .state('components', {
                url: '/components',
                template: '<components></components>'
            });

        $urlRouterProvider.otherwise('/');

    }

    appRunner.$inject = [];
    function appRunner() {

    }

    angular
        .module('app', [
            'ui.router',
            'ui.bootstrap',
            'ngAnimate'
        ])
        .config(appConfig)
        .run(appRunner);
}