import { Component } from '@angular/core';
import { Product } from '../product';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  providers: [ProductsService]

})
export class AboutComponent {
  products: Product[] = [];

  // constructor(){
  //   let x = new ProductsService();
  // x.push({name:'boo', price: 144, id: 24564, category:'pushed'})
  //   this.products = x.productsArr;
  // }

  // dependency injection concept
  constructor(_productsService : ProductsService){
    
    _productsService.productsArr.push({name:'boo', price: 144, id: 24564, category:'pushed'})
    this.products = _productsService.productsArr;
    
  }
}
