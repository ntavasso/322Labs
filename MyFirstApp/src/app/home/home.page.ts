import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  private listArray: Array<any> = [];

  constructor(private alertCtrl:AlertController) {}

  addItem(): void {
    this.alertCtrl.create({
      header: 'Add Item',
      message: 'Add to list:',
      inputs: [
        {
          type: 'text',
          name: 'name'
        }
      ],
      buttons: [
        {
          text: 'Cancel'
        },
        {
          text: 'Save',
          handler: (data) => {
            this.listArray.push({'title':data.name});
          }
        }
      ]
    }).then((prompt) => {
      prompt.present();
    });
  }

}
