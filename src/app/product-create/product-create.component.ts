import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';
import { Product } from '../product';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css'],
})
export class ProductCreateComponent implements OnInit {
   //1. declare variables here
   message: any;
   product: Product;
 
   //2. inject service layer
   constructor(private service: ProductService) {}
 
   //3. On Page load provide form values with Empty Inputs
   ngOnInit(): void {
     this.product = new Product();
   }
 
   //4. on click form submit
   createProduct() {
     this.service.createProduct(this.product).subscribe(
       (data) => {
         //send message to UI
         this.message=data;
         //clear form data
         this.product = new Product();
       },
       (error) => {
         this.message= 'Unable to Save Data!';
         console.log(error);
       }
     );
   }
}
