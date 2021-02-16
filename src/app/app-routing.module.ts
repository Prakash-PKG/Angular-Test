import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductCreateComponent } from './product-create/product-create.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { ProductListComponent } from './product-list/product-list.component';


const routes: Routes = [
  { path:'add', component: ProductCreateComponent },
  { path:'all', component: ProductListComponent },
  { path:'edit/:id', component: ProductEditComponent },
  { path:'', redirectTo:'all',pathMatch:'full' },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
