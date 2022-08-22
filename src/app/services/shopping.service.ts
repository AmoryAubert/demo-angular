import { Injectable } from '@angular/core';
import { Article } from '../models/article';

@Injectable({
  providedIn: 'root'
})
export class ShoppingService {

  private articles: Article[] = [
    { nom: "Poulet", quantité: 1 },
    { nom: "Riz", quantité: 3 },
  ]

  constructor() { }

  ajouter(item:string) : void { 
    this.articles
  }

  supprimer(item:string) { 

  }

  plus(item: string) { 

  }

  moins(item: string) { 

  }
}
