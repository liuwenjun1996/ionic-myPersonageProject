import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  homeList: any = [];
  constructor(public navCtrl: NavController) {

  }

  ionViewWillEnter() {
    this.homeList = [{ value: '1' }, { value: 2 }, { value: 3 }, { value: 4 }, { value: 5 }, { value: 6 }];
  }
  ionViewDidEnter() {

  }
  ionViewWillLoad() {
  }

  ionViewDidLoad() {

  }


}
