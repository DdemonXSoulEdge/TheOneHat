import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CurrencyPipe } from '@angular/common';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-view',
  templateUrl: './view3.component.html',
  styleUrls: ['./view3.component.css'],
  standalone: true, 
imports: [CommonModule, CurrencyPipe, ButtonModule]
})
export class View3Component {

  constructor() {
    console.log('View3Component se ha cargado correctamente!');
  }

  product = {
    name: 'Sombrero de Kuma',
    price: 299.99,
    currency: 'MXN', 
    description: 'Que mejor regalo para el dia del padre que el gorro del mejor padre de One Piece.',
    image: 'https://m.media-amazon.com/images/I/71qEZdzzJgL.jpg',
    sizes: ['CH', 'M', 'G', 'XG']
  };

  selectedSize: string | null = null;

  selectSize(size: string) {
    this.selectedSize = size;
    console.log(`Talla seleccionada: ${size}`);
  }

  addToCart() {
    if (!this.selectedSize) {
      console.log('Debes seleccionar una talla antes de agregar al carrito');
      return;
    }

    const item = {
      product: this.product.name,
      size: this.selectedSize,
      price: this.product.price,
      currency: this.product.currency
    };

    console.log('Producto agregado al carrito:', item);
  }
}