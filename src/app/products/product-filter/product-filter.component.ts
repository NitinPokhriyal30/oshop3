import { Component, Input } from '@angular/core';
import { Category } from '../../admin/category/category.model';
import { CategoryService } from '../../category.service';

@Component({
  selector: 'app-product-filter',
  templateUrl: './product-filter.component.html',
  styleUrls: ['./product-filter.component.css']
})
export class ProductFilterComponent {

  categoryList: Category[];
  @Input('category') category;

  constructor(private categoryService: CategoryService) {
    
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
