import { Component } from '@angular/core';
//importamos el servicio 
import { PhotoService } from '../services/photo.service';
@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(public photoService: PhotoService) {}
  // llamar a la funcion del servicio 
  addPhotoToGallery() {
    this.photoService.addNewToGallery();
  }
  // se muestran todas las fotos ya almacenadas localmente
  async ngOnInit() {
    await this.photoService.loadSaved();
  }
}
