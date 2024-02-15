import { Injectable } from '@angular/core';
import { Product } from './product';

@Injectable(

  // {
  //   // providedIn: 'root', // change affects all
  //   //instead, we can do providers: [etc etc] in app module ts, where components
  //   // see the same instance of the service
  // }

)
export class ProductsService {
  productsArr: Product[] = [
    { name: 'Toshiba', id: 22, price: 123123, category: 'TV' },

    { name: 'mac', id: 22, price: 123123, category: 'laptop' },

    { name: 'sharp', id: 22, price: 200, category: 'refrigerator' },

    { name: 'samsung', id: 22, price: 123123, category: 'phone' },
  ];

  constructor() {}
}
