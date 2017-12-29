import { Component } from '@angular/core';
import { FoodOnCampusProvider} from '../../providers/food-on-campus/food-on-campus';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the InformationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-information',
  templateUrl: 'information.html',
})
export class InformationPage {

 information = [];
  place:string;
  date:string;

public index;

  constructor(public navCtrl: NavController, private foodOnCampusProvider:FoodOnCampusProvider,    public navParams: NavParams) {
  
//    console.log("PLACE: " + this.place);

    this.index = navParams.get('index');
    this.place = navParams.get('place');
//    console.log("PLACE: " + this.place);
    this.date = navParams.get('date');
  }

  ionViewDidLoad() {
//    console.log('ionViewDidLoad InformationPage');
//    console.log("Passed index: " + this.index);


    this.foodOnCampusProvider.getData(this.place, this.date).
    subscribe(information => {

      this.information = information.menus.menu[this.index]["@attributes"];
//      console.log(this.information);

    });

  }


}
