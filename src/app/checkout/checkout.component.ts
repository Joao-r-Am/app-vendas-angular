import { Component, inject, OnInit } from '@angular/core';
import { MaterialModule } from '../material.module';
import { CurrencyPipe } from '@angular/common';
import { CartService } from '../cart.service';
import { CartItem } from '../cart.dto';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [MaterialModule, CurrencyPipe],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.css',
})
export class CheckoutComponent implements OnInit {
  cartService = inject(CartService);
  public items: CartItem[] = [];

  ngOnInit(): void {
    this.items = this.cartService.getItems();
  }

  onRemoveItem(item: CartItem) {
    this.cartService.removeItem(item);
    this.items = this.cartService.getItems();
  }
}
