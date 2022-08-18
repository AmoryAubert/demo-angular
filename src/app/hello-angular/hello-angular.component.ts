import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello-angular',
  templateUrl: './hello-angular.component.html',
  styleUrls: ['./hello-angular.component.scss'],
})
export class HelloAngularComponent implements OnInit {
  name: string = fName[n];

  constructor() {}

  ngOnInit(): void {}

  handleClick(title: string) {
    let n: number;
    do {
      n = randomize(0, fName.length);
    } while (this.name == fName[n]);
    console.log(title);
    this.name = fName[n];
  }
}
function randomize(min: number, max: number) {
  return Math.floor(Math.random() * (max - min)) + min;
}
let fName: string[] = [
  'Toto Rak',
  "Kan E'senna",
  'Amiral Merlwib',
  "Nanamo Ul'namo",
  'General Aldyn',
  'Alphinaud Leveilleur',
  'Seigneur Hien',
  'Tataru Taru',
];
let n: number = randomize(0, fName.length);
