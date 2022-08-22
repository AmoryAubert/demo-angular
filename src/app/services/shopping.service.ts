import { Injectable } from '@angular/core';
import { Article } from '../types';
import { nanoid } from 'nanoid';

@Injectable({
  providedIn: 'root',
})
export class ShoppingService {
  articles: Article[] = [
    { id: nanoid(), name: 'Poulet', quantity: 1, isPromo: false, unitPrice: 2 },
    { id: nanoid(), name: 'Riz', quantity: 4, isPromo: true, unitPrice: 3 },
    { id: nanoid(), name: 'Eau', quantity: 3, isPromo: false, unitPrice: 0.8 },
  ];

  constructor() {}

  Afficher() {
    return this.articles;
  }

  ajouter(name: string, unitPrice: number, isPromo: boolean): void {
    const newArticle = {
      id: nanoid(),
      name,
      quantity: 1,
      isPromo,
      unitPrice,
    };
    this.articles.push(newArticle);
  }

  supprimer(id: string) {
    const index = this.articles.findIndex((article) => article.id === id);
    if (index === -1) {
      console.log('Supression impossible');
      return;
    }
    this.articles.splice(index, 1);
  }

  plus(id: string, quantity: number) {
    const index = this.articles.findIndex((article) => article.id === id);
    if (index === -1) {
      return;
    }
    this.articles[index].quantity = quantity + 1;
  }

  moins(id: string, quantity: number) {
    const index = this.articles.findIndex((article) => article.id === id);
    if (index === -1) {
      return;
    }
    if (quantity - 1 === 0) {
      this.articles.splice(index, 1);
      return;
    } else {
      this.articles[index].quantity = quantity - 1;
    }
  }
}
