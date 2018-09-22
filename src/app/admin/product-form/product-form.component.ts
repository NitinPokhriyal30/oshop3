import { Component, OnInit} from '@angular/core';
import { CategoryService } from '../../category.service';
import { ProductService } from '../../product.service';
import { Router } from '@angular/router';
import { Category } from '../category/category.model';
import { NgForm } from '@angular/forms';
// import { Observable } from 'rxjs';
// import { FirebaseListObservable } from "angularfire2/database";

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})

export class ProductFormComponent implements OnInit{

  categoryList: Category[];

  constructor(
    private router: Router,
    private categoryService: CategoryService, 
    public productservice: ProductService) {}

  save(product: NgForm){
    console.log(product);
    if (product.value.$key == null)
      this.productservice.insertProduct(product.value),
      this.router.navigate(['/admin/products'])
    else
      this.productservice.updateProduct(product.value);
      this.router.navigate(['/admin/products'])
      this.resetForm(product);
    // this.tostr.success('Submitted Succcessfully', 'Employee Register');
  }

  resetForm(product?: NgForm) {
    if (product != null)
      product.reset();
    this.productservice.selectedProduct = {
      $key: null,
      category: '',
      title: '',
      imageUrl: '',
      price: null,
    }
  }

  delete(key: string) {
    if (confirm('Are you sure to delete this product ?') == true) {
      this.productservice.deleteProduct(key);
      this.router.navigate(['/admin/products'])
      // this.tostr.warning("Deleted Successfully", "Employee register");
    }
  }

  ngOnInit() {
    var x = this.categoryService.getCategorys();
    x.snapshotChanges().subscribe(item => {
    this.categoryList = [];
    item.forEach(element => {
      var y = element.payload.toJSON();
      y["$key"] = element.key;
      this.categoryList.push(y as Category);
    });
  });
}
}
