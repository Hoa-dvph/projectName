import { Component } from '@angular/core';
import { ProductListComponent } from '../../pages/admin/products/list/list.component';

@Component({
  selector: 'app-admin-layout',
  standalone: true,
  imports: [ProductListComponent], // Corrected import statement
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.css']
})
export class AdminLayoutComponent {

}
