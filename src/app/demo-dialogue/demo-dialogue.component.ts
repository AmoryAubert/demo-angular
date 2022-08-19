import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo-dialogue',
  templateUrl: './demo-dialogue.component.html',
  styleUrls: ['./demo-dialogue.component.scss']
})
export class DemoDialogueComponent implements OnInit {

  prenomParent : string = "Roger";
  messageDeFiston : string = "En attente d'un bonjour du Fiston...";

  constructor() { }

  ngOnInit(): void {
  }

  recevoirBonjour(event : string){
    this.messageDeFiston = event;
  }
}
