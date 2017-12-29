import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';


@Injectable()
export class FoodOnCampusProvider {

  url;
  //place:string;
  //“santiago” (Campus Aveiro),
  //“estga” (Águeda),
  //“esan” (Aveiro Norte), 
  //“rest” (Restaurante Universitário),
  // “all” (todos os anteriores).
 // date:string;
  //"day",
  // "week"

  constructor(public http: Http) {
//    console.log('Hello FoodOnCampusProvider Provider');
    // console.log(this.url);
    // console.log('Arriba iba la url');
    // console.log(this.date + '   ' + this.place);
    // console.log('Arriba iba los campos');
    this.url = 'http://services.web.ua.pt/sas/ementas?';
//   this.url = 'http://services.web.ua.pt/sas/ementas?date=week&place=santiago&format=json';


  }

  getData(place, date){

    //console.log(this.place + ' Este es el nuevo place');

    //return this.http.get(this.url);
    return this.http.get(this.url + 'date=' + date + '&place=' + place + '&format=json').map(res => res.json());

  }


}
