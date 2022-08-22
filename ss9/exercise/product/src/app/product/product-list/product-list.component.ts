import {Component, OnInit} from '@angular/core';
import {ProductService} from '../../service/product.service';
import {Product} from '../../model/product';
import {Router} from '@angular/router';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  productDelete: Product;

  constructor(private productService: ProductService, private router: Router) {
  }

  ngOnInit(): void {
    this.getAll();
  }

  getAll(): void {
    this.productService.getAll().subscribe(products => {
      this.products = products;
    });
  }

  delete(): void {
    this.productService.deleteProduct(this.productDelete.id);
    this.router.navigate(['/product/list']);
  }

  getProductDelete(item: any): void {
    this.productDelete = item;
  }
}