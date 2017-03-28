import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Product } from './product';

@Injectable()
export class ProductsApi {

  private endpoint = 'https://api.kurashicom.dev/products';

  private headers = new Headers({
    'Content-Type': 'application/json',
    'Authorization': 'Bearer token'
  });

  constructor(private http: Http) { }

  getProducts(): Promise<Product[]> {
    return this.http.get(this.endpoint, { headers: this.headers })
               .toPromise()
               .then(response => response.json().data.products as Product[])
               .catch(this.handleError);
  }

  getProduct(id: number): Promise<Product> {
    const url = `${this.endpoint}/${id}`;
    return this.http.get(url, { headers: this.headers })
      .toPromise()
      .then(response => response.json().data.product as Product)
      .catch(this.handleError);
  }

  updateProduct(product: Product): Promise<Product> {
    const url = `${this.endpoint}/${product.id}`;
    return this.http.put(url, JSON.stringify(product), { headers: this.headers })
      .toPromise()
      .then(() => product)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
