import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from "@ionic/storage";
import { HomePage } from '../home/home';

/**
 * Generated class for the SettingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {

  place:string;
  date:string;


  constructor(public navCtrl: NavController, public navParams: NavParams,
  private storage:Storage) {
 
 this.storage.get('parameters').then((val) => {

  if(val != null){

    let parameters = JSON.parse(val);
    this.place = parameters.place;
    this.date = parameters.date;

  }else{

    this.place = 'santiago';
    this.date = 'day';

  }

 });
 
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingsPage');
  }

  saveForm(){

let parameters = {

place: this.place,
date: this.date

}

//console.log(parameters);
this.storage.set('parameters', JSON.stringify(parameters));
this.navCtrl.push(HomePage);

  }

}
