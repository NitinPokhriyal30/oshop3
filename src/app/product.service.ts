import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Product} from './admin/product/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  productList: AngularFireList<any>;
  selectedProduct: Product = new Product();

  constructor(public db: AngularFireDatabase) {}

   create(product) {
    return this.db.list('/products').push(product);
   }

   getAll(){
    this.productList = this.db.list('/products');
    return this.productList;
   }

   insertProduct(product : Product)
  {
    this.productList.push({
      category: product.category,
      imageUrl: product.imageUrl,
      price: product.price,
      title: product.title
    });
  }

  

  updateProduct(product : Product){
    this.productList.update(product.$key,
      {
        category: product.category,
        imageUrl: product.imageUrl,
        price: product.price,
        title: product.title
      });
  }

  deleteProduct($key : string){
    this.productList.remove($key);
  }
}
