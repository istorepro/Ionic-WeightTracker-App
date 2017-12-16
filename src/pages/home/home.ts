import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  testVar: string[];

  constructor(public navCtrl: NavController) {
    this.testVar = ['String 0', 'String 1'];
    // console.log(this.testVar.toString());
    console.log('This is a log string');
  }

}
