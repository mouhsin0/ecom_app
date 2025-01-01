import { Component, inject } from '@angular/core';
import { CartService } from '../../services/cart.service';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-cart',
  imports: [MatCardModule],
  template: `

      <main class="w-full h-[calc(100%-64px)] p-5">

      <span>hello world i like coding </span>

          <div class="w-full flex flex-wrap gap-2">


              @for (item of cartService.cart(); track item.id) {

                <mat-card class="max-w-[400px] w-full max-h-[80px] h-full !rounded-none" appearance="outlined">

                  <mat-card-header class="">

                    <span class="w-full h-full flex items-center">
                    <img [src]="item.image" class="w-[50px] h-[50px] object-contain">

                      <span>
                      <mat-card-title> {{item.title}} </mat-card-title>
                      <mat-card-subtitle> {{item.description}} </mat-card-subtitle>
                      </span>
                    </span>

                  </mat-card-header>

                </mat-card>
                
              }

          </div>

      </main>
  `,
  styles: ``
})
export class CartComponent {


  cartService = inject(CartService)
}
