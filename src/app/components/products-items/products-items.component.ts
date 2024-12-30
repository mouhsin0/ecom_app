import { Component, inject, input } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import { product } from '../../help/product';
import { PrimaryButtonComponent } from "../primary-button/primary-button.component";
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-products-items',
  imports: [MatCardModule, PrimaryButtonComponent],
  template: `

    <mat-card appearance="outlined" class=" w-full max-h-[300px] h-full rounded-none felx flex-col justify-between"> 

        <div class="flex justify-center"> <img [src]="product().image" class="max-w-[200px] w-full max-h-[200px] h-full"> </div>

        <mat-card-content>

          <mat-card-title> {{product().title}} </mat-card-title>

          <mat-card-subtitle class="!font-extralight"> {{product().description}} </mat-card-subtitle>

        </mat-card-content>

        <mat-card-actions>

          <span class="flex w-full justify-between items-center">

          <span class="border border-dashed border-gray-300 px-4 py-1 rounded-md">  {{product().price}} </span>

            <app-primary-button label="Add to Cart" (valueButtonCart)="cartService.addToCart(product())" />
          </span>

        </mat-card-actions>
    </mat-card>
  `,
  styles: ``
})
export class ProductsItemsComponent {

    cartService = inject(CartService)

    product = input.required<product>()

}
