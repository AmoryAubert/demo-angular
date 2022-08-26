import { Component, OnInit } from '@angular/core';

export type Link = {
  title: string;
  url?: string;
  children?: Link[];
  isVisible?: boolean;
};

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {
  linkList: Link[] = [];

  constructor() {}

  ngOnInit(): void {
    this.linkList = [
      {
        title: 'Home',
        url: '/',
      },
      {
        title: 'Demos',
        children: [
          {
            title: 'Hello',
            url: '/demos/hello',
          },
          {
            title: 'Dialogue',
            url: '/demos/demo-dialogue',
          },
          {
            title: 'Directives',
            url: '/demos/demo-directive',
          },
          {
            title: 'Pipes',
            url: '/demos/demo-pipe',
          },
          {
            title: 'params',
            url: '/demos/params',
          },
          {
            title: 'demo http',
            url: '/demos/demo-http',
          },
        ],
      },
      {
        title: 'Exos',
        children: [
          {
            title: 'Chrono',
            url: '/exos/chrono',
          },
          {
            title: 'Dialogue',
            url: '/exos/exo-dialogue',
          },
          {
            title: 'Form',
            url: '/exos/exo-form',
          },
          {
            title: 'Shopping List',
            url: '/exos/shopping',
          },
          {
            title: 'Cours List',
            url: '/exos/cours',
          },
          {
            title: 'Login',
            url: 'exos/login',
          },
        ],
      },
    ];
  }
}
