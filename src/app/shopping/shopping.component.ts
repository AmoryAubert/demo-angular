import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { nanoid } from 'nanoid';
import { ShoppingService } from '../services/shopping.service';
import { Article } from '../types';

@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.scss'],
})
export class ShoppingComponent implements OnInit {
  articles: Article[] = [];
  newArticle: string = '';
  myFormGroup!: FormGroup;

  constructor(
    private _shoppingService: ShoppingService,
    private _formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.articles = this._shoppingService.Afficher();
  }

  ajouterArticle(unitPrice: string, isPromo: boolean): void {
    let uPrice: number = parseInt(unitPrice, 10);
    this._shoppingService.ajouter(this.newArticle, uPrice, isPromo);
  }

  supprimerArticle(id: string): void {
    this._shoppingService.supprimer(id);
  }

  plusArticle(id: string, quantity: number) {
    this._shoppingService.plus(id, quantity);
  }
  moinsArticle(id: string, quantity: number) {
    this._shoppingService.moins(id, quantity);
  }

  afficherTotal() {
    let total = this.articles.reduce((acc, object) => {
      return acc + object.unitPrice * object.quantity;
    }, 0);
    return total;
  }
}
