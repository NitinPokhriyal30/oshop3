import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Category } from './admin/category/category.model';

// import { Observable } from 'rxjs';

@Injectable()
export class CategoryService {

  categoryList: AngularFireList<any>;
  selectedCategory: Category = new Category();

  constructor(private db: AngularFireDatabase) { }

  getCategorys() {
    this.categoryList = this.db.list('categories');
    return this.categoryList;
  }

  // , short => short.orderBy('name','asc')

}


