import { Component } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
import { ToolbarComponent } from './header/toolbar/toolbar.component';
import { ProductsListComponent } from './pages/products-list/products-list.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [ToolbarComponent, RouterOutlet],
  template: `
  
    <app-toolbar/>
    <router-outlet/>
  `,
  styles: ``,
})
export class AppComponent {
  
    
}
