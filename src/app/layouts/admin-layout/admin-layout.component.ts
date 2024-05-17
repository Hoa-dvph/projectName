import { Component } from '@angular/core';
import { ProductListComponent } from '../../pages/admin/products/list/list.component';

@Component({
  selector: 'app-admin-layout',
  standalone: true,
  imports: [ProductListComponent],
  templateUrl: './admin-layout.component.html',
  styleUrl: './admin-layout.component.css'
})
export class AdminLayoutComponent {

}
