import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo-pipe',
  templateUrl: './demo-pipe.component.html',
  styleUrls: ['./demo-pipe.component.scss'],
})
export class DemoPipeComponent implements OnInit {
  message?: string;
  age?: number;
  ajd?: Date;
  price?: number;

  constructor() {}

  ngOnInit(): void {
    this.message = 'Yoloo les Boyz';
    this.age = 31;
    this.ajd = new Date();
    this.price = 42.69;
  }
}
