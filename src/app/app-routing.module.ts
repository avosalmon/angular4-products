import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProductListComponent }  from './products/product-list/product-list.component';
import { ProductEditComponent }  from './products/product-edit/product-edit.component';
import { ProductCreateComponent }  from './products/product-create/product-create.component';

const routes: Routes = [
  { path: '', redirectTo: '/list', pathMatch: 'full' },
  { path: 'list',  component: ProductListComponent },
  { path: 'edit',  component: ProductEditComponent },
  { path: 'create',  component: ProductCreateComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
