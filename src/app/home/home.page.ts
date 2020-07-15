import { Component, OnInit } from '@angular/core';
import { StorageService } from '../services/storage.service';
import { AlertController, ModalController, IonList } from '@ionic/angular';
import { AddModalPage } from '../modal/add-modal/add-modal.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  datos = {
    dato1: '',
    dato2: ''
  };

  constructor(
    private storage: StorageService,
    public modalController: ModalController
  ) {}

  ngOnInit(){
  }
  Submit(){
    console.log('si se enviaron los datos');
    console.log(this.datos);
  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: AddModalPage,
      cssClass: 'my-custom-class'
    });
    return await modal.present();
  }


}
