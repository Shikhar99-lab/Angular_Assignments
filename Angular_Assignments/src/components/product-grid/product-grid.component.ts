import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CartService } from '../../services/cart.service';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CartPageComponent } from '../cart-page/cart-page.component';
interface Product {
  name: string;
  price: number;
  category: string;
}

@Component({
  selector: 'app-product-grid',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink, RouterOutlet, CartPageComponent],
  templateUrl: './product-grid.component.html',
  styleUrls: ['./product-grid.component.css']
})
export class ProductGridComponent implements OnInit {
  products: Product[] = [
    { name: 'Product 1', price: 100, category: 'Category 1' },
    { name: 'Product 2', price: 150, category: 'Category 2' },
    { name: 'Product 3', price: 200, category: 'Category 1' },
    { name: 'Product 4', price: 250, category: 'Category 2' }
  ];

  filteredProducts: Product[] = [];
  selectedCategory = 'all';
  categories: string[] = ['Category 1', 'Category 2'];
  sortOrder = 'high-to-low';

  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.filterProducts();
  }

  filterProducts() {
    this.filteredProducts = this.selectedCategory === 'all' ? 
      [...this.products] : 
      this.products.filter(product => product.category === this.selectedCategory);

    if (this.sortOrder === 'high-to-low') {
      this.filteredProducts.sort((a, b) => b.price - a.price);
    } else {
      this.filteredProducts.sort((a, b) => a.price - b.price);
    }
  }

  addToCart(product: Product) {
    this.cartService.addToCart(product);
  }

}
