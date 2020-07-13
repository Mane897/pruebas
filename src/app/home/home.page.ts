import { Component, OnInit } from '@angular/core';
import { Plugins } from '@capacitor/core';

const {Storage} = Plugins;

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

  constructor() {}

  ngOnInit(){
  }
  Submit(){
    console.log('si se enviaron los datos');
    console.log(this.datos);
  }


  async setItem() {
    const cartvalue = JSON.stringify([{
      id: 1,
      product: this.datos.dato1
    }, {
      id: 2,
      product: this.datos.dato2
    }]);

    await Storage.set({
      key: 'products',
      value: cartvalue
    });
    await Storage.set({
      key: 'user',
      value: 'Usuario'
    });
  }

  async getItem() {   // obtener valor de los datos en consola
    const products = await Storage.get({key: 'products'});
    console.log(JSON.parse(products.value));
  }
  async removeItem() {  // remover un valor de los datos
    await Storage.remove({ key: 'products'});
  }
  async getKeys() {
    const keys = await Storage.keys();
    console.log('Keys ', keys);
  }
  async clearStorage() {  // limpiar datos
    await Storage.clear();
  }

}
