import { Injectable, signal } from '@angular/core';
import { product } from '../help/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }

  cart = signal<product[]>([

    {
      id: 7,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7VN1h5qr7DYuRkQQ6fezgu3JcX7DLrJGEgA&s',
      title: 'tablette',
      description: 'is best tablette',
      price: 700
    }, 


    {
      id: 8,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmmI1XO6V35fX43svG6fzJRBfvkev_yK6ToA&s',
      title: 'iphone 13',
      description: 'iphone 13 bleu',
      price: 700
    }
  ])


  /* method of push product to cart  */

  addToCart(prod: product){

    this.cart.set([...this.cart(), prod])
  }
}
