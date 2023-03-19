import { Component } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent {
  products = this.cartService.getItems();
  items = this.cartService.getItems();
  total = this.cartService.getTotal();

  constructor(private cartService: CartService) {}
}
