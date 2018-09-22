import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../product.service';
import { Product } from '../product/product.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements OnInit {

  productList: Product[];

  constructor(public productService: ProductService,public router: Router,) {


   }

   onEditProduct(id:number) {
     console.log(id);
   }

  ngOnInit() {
    var x = this.productService.getAll();
    x.snapshotChanges().subscribe(item => {
      this.productList = [];
      item.forEach(element => {
        var y = element.payload.toJSON();
        y["$key"] = element.key;
        this.productList.push(y as Product);
      });
    });
  }

  onEdit(pro: Product) {
    this.productService.selectedProduct = Object.assign({}, pro),
    this.router.navigate(['/admin/products/new'])
  }

}
