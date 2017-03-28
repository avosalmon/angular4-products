import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import 'rxjs/add/operator/switchMap';

import { Product } from '../../services/product';
import { ProductsApi } from '../../services/products.api';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss']
})
export class ProductEditComponent implements OnInit {

  product: Product;

  constructor(
    private productsApi: ProductsApi,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params
      .switchMap((params: Params) => this.productsApi.getProduct(+params['id']))
      .subscribe(product => this.product = product);
  }

  updateProduct(): void {
    this.productsApi.updateProduct(this.product)
                    .then(

                    );
  }
}
