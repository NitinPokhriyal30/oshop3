import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../admin/product/product.model';
import { ShoppingCartService } from '../shopping-cart.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {

  @Input('product') product: Product;
  @Input('showActions') showActions= true;

  constructor( ) { }

  // addToCart(product: Product) {
  //   let cartId = localStorage.getItem('cartId');
  //   if (!cartId){
  //     this.cartService.create().then(result => {
  //       localStorage.setItem('cartId', result.key);

  //       //Add product to shoopping cart
  //     });
  //   }else {
  //     //Add product to shoopping cart
  //   }
  // }

  ngOnInit() {
  }

}
