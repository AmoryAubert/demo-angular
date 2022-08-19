import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-enfant-dialogue',
  templateUrl: './enfant-dialogue.component.html',
  styleUrls: ['./enfant-dialogue.component.scss']
})
export class EnfantDialogueComponent implements OnInit {

  @Input() prenomPapa : string = "Anonyme";
  @Input() prenomMaman : string = "Oui.";

  @Output() direBonjour : EventEmitter<string>;

  constructor() { 
    this.direBonjour = new EventEmitter<string>();
  }

  ngOnInit(): void {
  }

  emettreUnBonjour(){
    this.direBonjour.emit("Bjr papa jtm");
  }
}
