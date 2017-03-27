import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProductListComponent }   from './components/product-list/product-list.component';
import { ProductEditComponent }   from './components/product-edit/product-edit.component';
import { ProductCreateComponent } from './components/product-create/product-create.component';

const routes: Routes = [
  { path: '', redirectTo: '/list', pathMatch: 'full' },
  { path: 'list',     component: ProductListComponent },
  { path: 'edit/:id', component: ProductEditComponent },
  { path: 'create',   component: ProductCreateComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
