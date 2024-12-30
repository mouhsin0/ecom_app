import { Component, input, output } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-primary-button',
  imports: [MatButtonModule],
  template: `
  
    <button mat-raised-button class="!bg-blue-500 !text-white !rounded-md" (click)="valueButtonCart.emit()">
       {{label() }} 
    </button>
  `,
  styles: ``
})
export class PrimaryButtonComponent {

  label = input('')

  valueButtonCart = output()

}
