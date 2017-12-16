import { Component } from '@angular/core';
import { WEIGHTS, WeightEntry } from '../../data/mock-data';

/**
 * Generated class for the WeightListComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'weight-list',
  templateUrl: 'weight-list.html'
})
export class WeightListComponent {

  text: string;
  weights: WeightEntry[];

  constructor() {
    console.log('Hello WeightListComponent Component');
    this.text = 'Hello World';

    this.weights = WEIGHTS;
  }

}
