import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

interface Product {
  name: string;
  price: number;
  category: string;
}

@Component({
  selector: 'app-cart-page',
  standalone: true,
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css'],
  imports: [FormsModule, CommonModule],
})
export class CartPageComponent implements OnInit {
  cart: Product[] = [];

  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.cart = this.cartService.getCart();
  }

  removeFromCart(index: number): void {
    this.cartService.removeFromCart(index);
  }

  updateCart(): void {
    this.cartService.updateCart(this.cart);
  }
}
