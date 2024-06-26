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

  removeFromCart(index: number): void {
    this.cart.splice(index, 1);
  }

  updateCart(newCart: Product[]): void {
    this.cart = newCart;
  }
}
