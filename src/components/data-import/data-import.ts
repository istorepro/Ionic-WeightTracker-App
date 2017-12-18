import { Component } from '@angular/core';
import { FileChooser } from '@ionic-native/file-chooser';

/**
 * Generated class for the DataImportComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'data-import',
  templateUrl: 'data-import.html'
})
export class DataImportComponent {

  text: string;

  constructor( private fileChooser: FileChooser) {
    console.log('Hello DataImportComponent Component');
    this.text = 'Hello World';
  }


  /**
   * launchFilePicker
   */
  public launchFilePicker() {
    this.fileChooser.open()
    .then(uri => console.log(uri))
    .catch(e => console.log(e));
  }
}
