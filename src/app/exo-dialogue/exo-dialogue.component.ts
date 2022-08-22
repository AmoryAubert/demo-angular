import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exo-dialogue',
  templateUrl: './exo-dialogue.component.html',
  styleUrls: ['./exo-dialogue.component.scss']
})
export class ExoDialogueComponent implements OnInit {

  article: string = "Entrez un article";
  itemList: string [] = ["Poulet", "Riz"]

  constructor() { }

  ngOnInit(): void {
  }

  ajouter(item: string) {
    item = item.trim();
    if (item !== "") { 
      if (!this.itemList.find(produit => produit.toLowerCase() == item.toLowerCase())) { 
        this.itemList = [...this.itemList, item];
        this.article = "";
      }
    }
  }
  toDelete(index: number) : void {
    this.itemList.splice(index, 1);
  }
}
