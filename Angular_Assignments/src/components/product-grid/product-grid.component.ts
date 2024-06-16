import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Product {
  name: string;
  price: number;
  category: string;
}

@Component({
  selector: 'app-product-grid',
  standalone: true,
  imports: [CommonModule, FormsModule],
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
}
