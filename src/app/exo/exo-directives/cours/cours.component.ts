import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cours',
  templateUrl: './cours.component.html',
  styleUrls: ['./cours.component.scss']
})
export class CoursComponent implements OnInit {
  cours: Array<any> = [
    {
      title: "intro base de données",
      description: "Cours où on apprend à analyser une situation afind'en tirer un modèle Entité-Association que l'ont tranformera pas la suite en schéma relationnel",
      isActive: false
    },
    {
      title: "html",
      description: "c'est pour construire notre page",
      isActive: false
    },
    {
      title: "css",
      description: "c'est pour faire tout beau",
      isActive: false
    },
    {
      title: "javascript",
      description: "c'est pour rendre notre page interactive",
      isActive: false
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
