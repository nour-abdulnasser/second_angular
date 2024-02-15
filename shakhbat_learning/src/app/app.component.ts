import { Component } from '@angular/core';
import { Product } from './product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'shakhbat_learning';
  userName: string = 'nour';
  userAge: number = 19;
  imageURL: string = './assets/img.1.jpg'; // men makan index.html

  imgWidth: number = 400;

  productPrice: number = 10000;

  // product: object = {
  //   name: 'Toshiba',
  //   id: 22,
  //   price: 123123,
  //   category: 'TV',
  // }; // wrong

  // product: Product = {
  //   name: 'Toshiba',
  //   id: 22,
  //   price: 123123,
  //   category: 'TV',
  // }; // correct (using interface)

  friends: string[] = ['nour', 'sal', 'hamz'];

  productsArr: Product[] = [
    {name: 'Toshiba',
    id: 22,
    price: 123123,
    category: 'TV',},

    {name: 'mac',
    id: 22,
    price: 123123,
    category: 'laptop',},
    
    {name: 'sharp',
    id: 22,
    price: 200,
    category: 'refrigerator',},
    
    {name: 'samsung',
    id: 22,
    price: 123123,
    category: 'phone',}
    
  ];

  // getInfo(e:any){
  //   this.userName = e.target.value;
  // }

  sayHi(e: any) {
    console.log('hello from TS', e);

    // this.userName = 'boo';
    // if (this.userAge > 20) {
    //   this.userAge = 2;
    // } else {
    //   this.userAge = 21;
    // }
    // // just noticed this kinda looks like a toggle function bc if its over 20 it resets to less than 20 and vice versa
    // // so every click changes the condition

    this.userAge = e.target.value;
  }
}
