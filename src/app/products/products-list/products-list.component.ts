import { Component, inject, OnInit } from '@angular/core';
import { MaterialModule } from '../../material.module';
import { AsyncPipe } from '@angular/common';
import { LoadingBarComponent } from '../../loading-bar.component';
import { ProductService } from '../product.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Product } from '../product.dto';
import { lastValueFrom, Observable } from 'rxjs';
import { CartService } from '../../cart.service';
import { CartItem } from '../../cart.dto';
import { ProductsCardComponent } from '../products-card/products-card.component';

@Component({
  selector: 'app-products-list',
  standalone: true,
  imports: [
    MaterialModule,
    AsyncPipe,
    LoadingBarComponent,
    ProductsCardComponent,
  ],
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.css',
})
export class ProductsListComponent implements OnInit {
  productService = inject(ProductService);
  fb = inject(FormBuilder);
  products: Product[];
  productsObservable: Observable<Product[]>;
  searchForm: FormGroup;
  cartService = inject(CartService);

  async ngOnInit() {
    this.searchForm = this.fb.group({
      searchTerm: [''],
    });
    this.getProducts();
  }

  private async getProducts(searchTerm?: string) {
    this.productsObservable = this.productService.getAll(searchTerm);
    this.products = await lastValueFrom(this.productsObservable);
  }

  onSearch() {
    this.getProducts(this.searchForm.value.searchTerm);
  }

  onAddToCart(item: Product) {
    const cartItem: CartItem = {
      idProduct: item.id,
      name: item.name,
      quantity: 1,
      unitPrice: item.unitPrice,
    };
    this.cartService.addItem(cartItem);
  }
}
