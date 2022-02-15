import { Component, OnInit } from '@angular/core';
import { SeedCartService } from '../seed-cart.service';
import { SeedCartComponent } from '../seed-cart/seed-cart.component';
import { Seed } from './seed';

@Component({
  selector: 'app-seed-list',
  templateUrl: './seed-list.component.html',
  styleUrls: ['./seed-list.component.scss']
})
export class SeedListComponent implements OnInit {

  seeds : Seed [] = [
  {name: 'Rosa Lila',
  price: 20,
  stock:5,
  image:'https://i.pinimg.com/736x/5f/3e/f9/5f3ef987167070d5bcd01443a8d63ca8.jpg',
  quantity : 0
  },
  {name: 'Rosa Naranja',
  price: 25,
  stock: 32,
  image:'https://i.pinimg.com/550x/f7/87/76/f787764213555e20c54664ad6d7a6a15.jpg',
  quantity: 0
  },
  {name: 'Rosa Amarilla',
  price: 20,
  stock: 54,
  image:'https://s1.eestatic.com/2020/06/03/curiosidades/significado/flores-plantas-curiosidades_494962046_153098315_1706x960.jpg',
  quantity : 0
  },
  {name: 'Rosa Rosa',
  price: 40,
  stock: 12,
  image:'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Rosa_chinensis.jpg/1200px-Rosa_chinensis.jpg',
  quantity: 0
  },
  {name: 'Rosa Blanca',
  price: 55,
  stock:40,
  image:'https://t2.uc.ltmcdn.com/images/1/8/1/cual_es_el_significado_de_las_rosas_blancas_26181_orig.jpg',
  quantity: 0
  },
  {name: 'Rosa Roja',
  price: 15,
  stock:0,
  image:'https://www.jardineriaon.com/wp-content/uploads/2017/03/rosa-roja-1-830x551.jpg',
  quantity: 0
  },
];

  constructor(private seedcart: SeedCartService) { 

  }

  ngOnInit(): void {
  }
  addToCart(seed) :void {
    this.seedcart.addToCart(seed);
    seed.stock -= seed.quantity;
    seed.quantity =0;

  }


}
