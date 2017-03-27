import { Component, OnInit } from '@angular/core';

import { Product } from '../../services/product';
import { ProductsApi } from '../../services/products.api';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: Product[] = [];

  constructor(private productsApi: ProductsApi) {}

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(): void {
    this.productsApi.getProducts().then(products => this.products = products);
  }

  imageUrl(uri: string): string {
    return 'https://s3-ap-northeast-1.amazonaws.com' + uri;
  }

  displayState(state: string): string {
    let label = '';

    switch (state) {
      case 'unpublished':
        label = '非公開';
        break;
      case 'published':
        label = '公開';
        break;
    }

    return label;
  }
}
