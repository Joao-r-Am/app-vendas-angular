import { Component } from '@angular/core';
import { MaterialModule } from '../material.module';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [MaterialModule, RouterOutlet],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent {}
