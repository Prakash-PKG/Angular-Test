import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../product';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {

  //4. Form object
  product = new Product();

  //1. Inject Service and activatedRoute object
  constructor(private service:ProductService, private activatedRoute:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    //2. read id from list component
    let id = this.activatedRoute.snapshot.params['id'];
    //3. call service to get product object based on id
    this.service.getOneProduct(id).subscribe(data=>{
      this.product=data;
    });
  }
  //5. on click update button
  updateProduct(){
    this.service.updateProduct(this.product)
    .subscribe(data=>{
      console.log(data);
      this.router.navigate(['all',data]);//goto List page
    });
  }

}
