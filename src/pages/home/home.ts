import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { MyEventPage } from "../my-event/my-event";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  myEvent() {
    this.navCtrl.push(MyEventPage);
  }
}
