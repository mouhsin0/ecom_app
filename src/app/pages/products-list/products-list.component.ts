import { Component, signal } from '@angular/core';
import { product } from '../../help/product';
import { ProductsItemsComponent } from '../../components/products-items/products-items.component';

@Component({
  selector: 'app-products-list',
  imports: [ProductsItemsComponent],
  template: `
  
    <main class="w-full h-[calc(100vh-64px)] bg-[#F2F9FF]">


      <div class="w-full h-full grid grid-cols-1 2xl:grid-cols-6 xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2  gap-3 p-5">


        @for (item of products(); track $index) {

            <app-products-items [product]="item" />

        }

      </div>


    </main>
  
  `,
  styles: ``
})
export class ProductsListComponent {


  products = signal<product[]>([

    {
      id: 1,
      image: 'https://static.zara.net/assets/public/2a6c/70e5/b39d4af58fcc/eed877d73218/04087429807-e1/04087429807-e1.jpg?ts=1725878536736&w=274',
      title: 'T-shirt',
      description: 'grey t shirt',
      price: 50
    },

    {
      id: 2,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUPekBi9Fgp2lJubFBotvNJVcqL2A6BIDYmA&s',
      title: 'Back pack',
      description: 'is best back pack',
      price: 100
    },

    {
      id: 3,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToPfRcTv8DFzRCmt5iGSfdoCeIgxwBzRciIQ&s',
      title: 'black swatch',
      description: 'black swatch best',
      price: 200
    },

    {
      id: 4,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXf1F35y2NW-i-31-nKtzkwulu5JLIQlc6Yw&s',
      title: 'tricot',
      description: 'this tricot is best',
      price: 150
    },

    {
      id: 5,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyL4GKnYO2vJChXwIbChls_E2xVIxiJmebgg&s',
      title: 'smart tv',
      description: 'black smart tv',
      price: 700
    },
    
    {
      id: 6,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQVkjt9N5nmgt8LWml86GUCcTMR2pv_9oWKw&s',
      title: 'mac book air',
      description: 'mac book air grey',
      price: 700
    }, 

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

}
