import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CurrencyPipe } from '@angular/common';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-view',
  templateUrl: './view2.component.html',
  styleUrls: ['./view2.component.css'],
  standalone: true, 
imports: [CommonModule, CurrencyPipe, ButtonModule]
})
export class View2Component {

  constructor() {
    console.log('View2Component se ha cargado correctamente!');
  }

  product = {
    name: 'Sombrero de Portgas D Ace',
    price: 499.99,
    currency: 'MXN', 
    description: 'Siente el calor del puño de Akainu con el sombrero del hermano mayor de Luffy.',
    image: 'https://m.media-amazon.com/images/I/61s4iN02LfL.jpg',
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