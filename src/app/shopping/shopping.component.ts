import { Component, OnInit } from '@angular/core';
import { ShoppingService } from '../services/shopping.service';

@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.scss']
})
export class ShoppingComponent implements OnInit {

  constructor(private _shoppingService: ShoppingService) { }

  ngOnInit(): void {
  }

}
