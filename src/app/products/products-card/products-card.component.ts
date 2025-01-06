import { Component, Input } from '@angular/core';
import { MaterialModule } from '../../material.module';
import { CommonModule } from '@angular/common';
import { Product } from '../product.dto';

@Component({
  selector: 'app-products-card',
  standalone: true,
  imports: [MaterialModule, CommonModule],
  templateUrl: './products-card.component.html',
  styleUrl: './products-card.component.css',
})
export class ProductsCardComponent {
  @Input() product: Product;

  onAddToCart(product: Product) {
    console.log('TODO');
  }
}
