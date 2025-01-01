import { Component, inject } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import { PrimaryButtonComponent } from '../../components/primary-button/primary-button.component';
import { CartService } from '../../services/cart.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-toolbar',
  imports: [MatToolbarModule, PrimaryButtonComponent, RouterLink],
  template: `
  

    <mat-toolbar class="flex justify-between items-center border-b border-solid border-gray-200">

       <span class="font-semibold cursor-pointer" routerLink="/products"> Brahim Store </span> 
      <app-primary-button label="Cart {{cartService.cart().length}}" (valueButtonCart)="valueButtonCart()"
       routerLink="/cart" />

      </mat-toolbar>

  `,
  styles: ``
})
export class ToolbarComponent {


  cartService = inject(CartService)

  valueButtonCart(){

    
  }

}
