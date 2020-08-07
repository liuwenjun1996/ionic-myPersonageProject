import { Component } from '@angular/core';

/**
 * Generated class for the FirstComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'first',
  templateUrl: 'first.html'
})
export class FirstComponent {

  text: string;

  constructor() {
    console.log('Hello FirstComponent Component');
    this.text = 'Hello World';
  }

}
