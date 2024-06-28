import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import  {MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';

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
  imports: [FormsModule, CommonModule, MatSnackBarModule],
})
export class CartPageComponent implements OnInit {
  cart: Product[] = [];


  constructor(private cartService: CartService, private _snackBar: MatSnackBar) {}

  ngOnInit() {
    this.cart = this.cartService.getCart();
  }

  removeFromCart(index: number): void {
    this.cartService.removeFromCart(index);
  }

  updateCart(): void {
    this.cartService.updateCart(this.cart);
  }

  openSnackBar() {
    this._snackBar.open('Your message here', 'Close', {
      duration: 4000, 
    });
}
}