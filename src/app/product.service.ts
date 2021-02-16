import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from './product';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  basePath = 'http://localhost:9966/product-curd-app/product';

  constructor(private http: HttpClient) {}

  getAllProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.basePath}/all`);
  }
  deleteOneProduct(id: number): Observable<any> {
    return this.http.delete(`${this.basePath}/remove/${id}`, {
      responseType: 'text',
    });
} 
//Save Product Details
createProduct(product : Product) : Observable<any>{
  return this.http.post(`${this.basePath}/save`,product, { responseType : 'text'});
}
getOneProduct(id : number) : Observable<Product> {
  return this.http.get<Product>(`${this.basePath}/one/${id}`);
}
updateProduct(product: Product) :Observable<any> {
  return this.http.put(`${this.basePath}/modify`,product,{responseType:'text'});
}
}
