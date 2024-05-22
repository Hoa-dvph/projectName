import { Routes } from '@angular/router';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { ClientLayoutComponent } from './layouts/client-layout/client-layout.component';
import { ProductListComponent } from './pages/admin/products/list/list.component';
import { ProductDetailComponent } from './pages/products/detail/detail.component';

export const routes: Routes = [
    {
        path: 'admin',
        component: AdminLayoutComponent,
        children: [
            {
                path: 'products/list',
                component: ProductListComponent,
            },
        ],
    },
    {
        path: '',
        component: ClientLayoutComponent,
        children: [
            {
                path: 'products/:id',
                component: ProductDetailComponent,
            },
        ],
    },
];