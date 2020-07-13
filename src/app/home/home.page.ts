import { Component, OnInit } from '@angular/core';

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

}
