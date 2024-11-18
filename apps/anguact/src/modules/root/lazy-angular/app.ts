import angular from 'angular'

const app = angular.module('test', [])

app.component('lazyapp', {
  controller() {
    // this.showNewDirective = false;
    //
    // // We only show the new directive after a button press.
    // this.loadDirective = function(){
    //   this.showNewDirective = true;
    // };
  },
  // In the directive template we are using an undefined directive "new-directive".
  template: `<button ng-click="$ctrl.loadDirective()" ng-if="!$ctrl.showNewDirective">Load new directive</button>
  <new-directive ng-if="$ctrl.showNewDirective">New directive not loaded</new-directive>`,
})
