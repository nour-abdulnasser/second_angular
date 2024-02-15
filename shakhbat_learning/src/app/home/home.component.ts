import { Component } from '@angular/core';
import { Product } from '../product';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  //providers concept
  providers: [ProductsService]
})
export class HomeComponent {
  products: Product[] = [];

  // constructor(){
  //   let x = new ProductsService();
  //   this.products = x.productsArr;
  // }

  constructor(_productsService:ProductsService){
this.products = _productsService.productsArr;
  }

}
