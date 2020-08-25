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
    this.homeList = [{ value: 'ionic3+angular5' }, { value: '小程序' }, { value: 'java' }, { value: 'angular' }, { value: "react" }, { value: 'vue3.X' }, { value: 'flutter' }, { value: '敬请期待' }];
  }
  ionViewDidEnter() {

  }
  ionViewWillLoad() {
  }

  ionViewDidLoad() {

  }


}
