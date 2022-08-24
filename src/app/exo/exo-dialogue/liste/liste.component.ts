import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.scss']
})
export class ListeComponent implements OnInit {

  @Input() listeArticle: string[] = [];
  @Output() supprimer: EventEmitter<number>;

  constructor() { 
    this.supprimer = new EventEmitter<number>();
  }

  ngOnInit(): void {
  }

  sendId(item: string) { 
    let index = this.listeArticle.indexOf(item);
    this.supprimer.emit(index);
  }
}
