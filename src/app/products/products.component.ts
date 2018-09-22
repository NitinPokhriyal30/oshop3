import { Component} from '@angular/core';
import { ProductService } from '../product.service';
// import { CategoryService } from '../category.service';
import { Product } from '../admin/product/product.model';
// import { Category } from '../admin/category/category.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent{

  productList: Product[];
  filteredProducts: Product[];
  
  category: string;

  constructor(
    route: ActivatedRoute,
    private productService: ProductService, 
    ) {


      var x = this.productService.getAll();
      x.snapshotChanges().subscribe(item => {
        this.productList = [];
        item.forEach(element => {
          var y = element.payload.toJSON();
          y["$key"] = element.key;
          this.productList.push(y as Product);
        });

        route.queryParamMap.subscribe(params =>{
          this.category = params.get('category');
  
          this.filteredProducts = (this.category) ?
            this.productList.filter(p => p.category === this.category) :
            this.productList;
        });
      });

      
    }

}
