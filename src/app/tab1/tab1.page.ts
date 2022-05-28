import { Component } from '@angular/core';
import { Geolocation } from '@capacitor/geolocation';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
 latitud:number;
 longitud:number;
  constructor() {}
   async obtenerCoordenadas(){
 const obtenerCoordenadas = await Geolocation.getCurrentPosition();
 this.latitud=obtenerCoordenadas.coords.latitude;
 this.longitud=obtenerCoordenadas.coords.longitude;
  }
}
