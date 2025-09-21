import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-paystuff',
  standalone: true,
  templateUrl: './paystuff.component.html',
  styleUrls: ['./paystuff.component.css'],
  imports: [CommonModule, ButtonModule, DialogModule]
})
export class PaystuffComponent {
  displayModal = false;

  constructor(private router: Router) {}

  pagar(): void {
    this.displayModal = true; 
  }

  confirmar(): void {
    this.displayModal = false;
    this.router.navigate(['/home']);
  }
}
