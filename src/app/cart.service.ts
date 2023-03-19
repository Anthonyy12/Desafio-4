import { HttpClient } from '@angular/common/http';
import { CartProduct, Product, products } from './products';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  items: CartProduct[] = [];
  total: number = 0;

  //Total de compra en carrito de compra.
  setTotal(total: number) {
    this.total = total;
  }

  //Obtener el total de la compra
  getTotal() {
    return this.total;
  }

  /* . . . */
  constructor(private http: HttpClient) {}

  addToCart(product: Product) {
    this.items.push(product);
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }
  /* . . . */
  getShippingPrices() {
    return this.http.get<{ type: string; price: number }[]>(
      '/assets/shipping.json'
    );
  }
}
