import { Injectable } from '@angular/core';

interface Product {
  name: string;
  price: number;
  category: string;
}

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart: Product[] = [];

  addToCart(product: Product) {
    this.cart.push(product);
    console.log(this.cart);
  }

  getCart() {
    return this.cart;
  }
}
