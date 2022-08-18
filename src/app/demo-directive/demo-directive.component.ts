import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo-directive',
  templateUrl: './demo-directive.component.html',
  styleUrls: ['./demo-directive.component.scss'],
})
export class DemoDirectiveComponent implements OnInit {
  isOpen: boolean = false;
  choice: number = 0;

  listName: string[] = [
    'Toto Rak',
    "Kan E'senna",
    'Amiral Merlwib',
    "Nanamo Ul'namo",
    'General Aldyn',
    'Alphinaud Leveilleur',
    'Seigneur Hien',
    'Tataru Taru',
  ];

  constructor() {}

  ngOnInit(): void {}
}
