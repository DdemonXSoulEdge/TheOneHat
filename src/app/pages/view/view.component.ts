import { Component } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view',
  standalone: true,
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css'],
  imports: [CommonModule, CurrencyPipe, ButtonModule]
})
export class ViewComponent {

  constructor(private router: Router) {
    console.log('✅ ViewComponent cargado correctamente');
  }

  readonly product = {
    name: 'Sombrero de Trafalgar Law',
    price: 499.99,
    currency: 'MXN', 
    description: 'El sombrero de Law te deja llevar el corazón de capitán de los Piratas Corazón.',
    image: 'https://images-na.ssl-images-amazon.com/images/I/51hkK05L2UL._SLDPMOBCAROUSELAUTOCROP288221_MCnd_AC_SR462,693_.jpg',
    sizes: ['CH', 'M', 'G', 'XG']
  };

  selectedSize: string | null = null;

  selectSize(size: string): void {
    this.selectedSize = size;
    console.log(`Talla seleccionada: ${size}`);
  }

  addToCart(): void {
    if (!this.selectedSize) {
      console.warn(' Debes seleccionar una talla antes de agregar al carrito');
      return;
    }

    const item = {
      product: this.product.name,
      size: this.selectedSize,
      price: this.product.price,
      currency: this.product.currency
    };

    console.log('Producto agregado al carrito:', item);

    this.router.navigate(['/paystuff']);
  }
}
