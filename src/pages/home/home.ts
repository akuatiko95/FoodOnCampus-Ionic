import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FoodOnCampusProvider} from '../../providers/food-on-campus/food-on-campus';
import { Storage } from "@ionic/storage";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  food = [];
  leght:any;
  parameters:{
    place:string,
    date:string;
  }

  constructor(
    public navCtrl: NavController,
     private foodOnCampusProvider:FoodOnCampusProvider,
     private storage: Storage) {



  }

  ionViewWillEnter(){

    this.storage.get('parameters').then((val) => {

      if(val != null){

        this.parameters = JSON.parse(val);

      }else{
          this.parameters = {
          place: 'santiago',
          date: 'day'
        }

      }

       
    this.foodOnCampusProvider.getData(this.parameters.place, this.parameters.date).
    subscribe(food => {

      console.log(food.menus.menu);
    //  console.log(food.menus.menu[0]["@attributes"].canteen);
      this.leght = food.menus.menu.length;
      console.log('Food length: ' + this.leght);
      this.food = food.menus.menu;

    });

    });

    
   

  }

  public onButtonClick(index){

    console.log("Se ha clickado en el botón: " + index);

  }

}
