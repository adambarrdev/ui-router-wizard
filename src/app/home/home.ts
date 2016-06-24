
namespace app {
    'use strict';

    interface IWizardStep {
        name: string;
        sref: string;
        count: number;
        iconClass: string;
        isFirstStep?: boolean;
        isLastStep?: boolean;
    }

    interface IHomeControllerStateService extends angular.ui.IStateService {
        back: boolean;
    }
    export interface IHomeController extends IBaseController { }

    export class HomeController implements IHomeController {

        public title: string = 'Home';
        public headerIcon: string = 'fa fa-home';

        public steps: IWizardStep[] = [
            { name: 'Step 1', count: 1, iconClass: 'fa fa-phone fa-2x', sref: 'home.step1', isFirstStep: true },
            { name: 'Step 2', count: 2, iconClass: 'fa fa-graduation-cap fa-fw fa-2x', sref: 'home.step2' },
            { name: 'Step 3', count: 5, iconClass: 'fa fa-users fa-fw fa-2x', sref: 'home.step3' },
            { name: 'Step 4', count: 0, iconClass: 'fa fa-trophy fa-fw fa-2x', sref: 'home.step4' },
            { name: 'Step 5', count: 5, iconClass: 'fa fa-clock-o fa-fw fa-2x', sref: 'home.step5' },
            { name: 'Step 6', count: 9, iconClass: 'fa fa-tag fa-fw fa-2x', sref: 'home.step6' },
            { name: 'Step 7', count: 5, iconClass: 'fa fa-briefcase fa-fw fa-2x', sref: 'home.step7', isLastStep: true },
        ];
        public activeStep: IWizardStep;

        static $inject: Array<string> = ['$rootScope', '$state', '$stateParams'];
        constructor(private $rootScope: angular.IRootScopeService,
            public $state: IHomeControllerStateService,
            private $stateParams: angular.ui.IStateParamsService) {

            let self = this;
            self.setActiveStep(this.$state.current.name);

            self.$rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState) {
                let fromStepIndex = fromState.data ? fromState.data.stepIndex : 0;
                let toStepIndex = toState.data ? toState.data.stepIndex : 0;
                self.$state.back = (fromStepIndex > toStepIndex);
                self.setActiveStep(toState.name);
            });
        }

        private setActiveStep(name: string) {
            let self = this;
            angular.forEach(this.steps, (item, key) => {
                if (name === item.sref) {
                    self.activeStep = item;
                }
            });
        }

        previousStep() {
            let activeStepIndex = this.steps.indexOf(this.activeStep);
            if (activeStepIndex !== 0) {
                let newStep = this.steps[activeStepIndex - 1];
                this.$state.transitionTo(newStep.sref);
            }
        }

        nextStep() {
            let activeStepIndex = this.steps.indexOf(this.activeStep);
            if (activeStepIndex !== this.steps.length - 1) {
                let newStep = this.steps[activeStepIndex + 1];
                this.$state.transitionTo(newStep.sref);
            }
        }
    }

    angular
        .module('app')
        .component('home', {
            controller: HomeController,
            controllerAs: 'vm',
            templateUrl: 'app/home/home.html'
        });
}