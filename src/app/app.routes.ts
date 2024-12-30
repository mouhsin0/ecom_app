import { Routes } from '@angular/router';
import { ProductsListComponent } from './pages/products-list/products-list.component';
import { CartComponent } from './pages/cart/cart.component';

export const routes: Routes = [

    {
        path: '', redirectTo: 'products', pathMatch: 'full'
    },

    {
        path: 'products', component: ProductsListComponent
    },

    {
        path: 'cart', component: CartComponent
    }
];
