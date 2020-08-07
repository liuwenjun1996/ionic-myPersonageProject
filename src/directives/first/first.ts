import { Directive } from '@angular/core';

/**
 * Generated class for the FirstDirective directive.
 *
 * See https://angular.io/api/core/Directive for more info on Angular
 * Directives.
 */
@Directive({
  selector: '[first]' // Attribute selector
})
export class FirstDirective {

  constructor() {
    console.log('Hello FirstDirective Directive');
  }

}
