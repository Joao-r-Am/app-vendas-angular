import { Routes } from '@angular/router';
import { CategoriesComponent } from './categories/categories.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SuppliersComponent } from './suppliers/suppliers.component';
import { SuppliersListComponent } from './suppliers/suppliers-list/suppliers-list.component';
import { SuppliersShowComponent } from './suppliers/suppliers-show/suppliers-show.component';
import { SuppliersEditComponent } from './suppliers/suppliers-edit/suppliers-edit.component';
import { SuppliersDeleteComponent } from './suppliers/suppliers-delete/suppliers-delete.component';
import { SuppliersNewComponent } from './suppliers/suppliers-new/suppliers-new.component';
import { ProductsComponent } from './products/products.component';
import { ProductsListComponent } from './products/products-list/products-list.component';
import { CheckoutComponent } from './checkout/checkout.component';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./products/products.component').then((c) => c.ProductsComponent),
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./products/products-list/products-list.component').then(
            (c) => c.ProductsListComponent
          ),
      },
    ],
  },
  {
    path: 'categories',
    loadComponent: () =>
      import('./categories/categories.component').then(
        (c) => c.CategoriesComponent
      ),
  },
  {
    path: 'suppliers',
    loadComponent: () =>
      import('./suppliers/suppliers.component').then(
        (c) => c.SuppliersComponent
      ),
    children: [
      { path: '', component: SuppliersListComponent },
      { path: 'show/:id', component: SuppliersShowComponent },
      { path: 'edit/:id', component: SuppliersEditComponent },
      { path: 'del/:id', component: SuppliersDeleteComponent },
      { path: 'new', component: SuppliersNewComponent },
    ],
  },
  {
    path: 'checkout',
    loadComponent: () =>
      import('./checkout/checkout.component').then((c) => c.CheckoutComponent),
  },
];
