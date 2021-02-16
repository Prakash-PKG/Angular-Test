import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../product';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

 //1. create array variable to read data from service and displat at ui
 products: Product[];

 //2. make HAS-A Relation/Dependency Injection with Service class
 constructor(private service: ProductService, private router: Router) {}

 //8. call edit component TS
editProduct(id : number) {
    //console.log("Edit Id is=>"+id);
    this.router.navigate(['edit',id]); //Ex: edit/10
}

 //4. on component load , get data from service using backend application
 ngOnInit(): void {
   this.getAllProducts();
 }

 //5. call service layer to read (subscribe)
 getAllProducts() {
   this.service.getAllProducts().subscribe(
     (data) => {
       this.products = data;
     },
     (error) => {
       console.log(error);
     }
   );
 }
  //6. create variable that will display message at ui
  message : any;

  //5. on click delete button
  deleteProduct(id: number) {
    //console.log("clicked on:"+id);
    this.service.deleteOneProduct(id).subscribe(
      (data) => {
        this.message = data;
        this.getAllProducts();
      },error=>{
        console.log(error);
        this.message = 'Unable to delete! contact admin!!';
      });
  }
}
