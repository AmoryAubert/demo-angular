import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { User } from 'src/app/models/user';
import { UserPlaceholder } from 'src/app/types';
import { JsonplaceholderUserService } from './services/jsonplaceholder-user.service';

@Component({
  selector: 'app-demo-http',
  templateUrl: './demo-http.component.html',
  styleUrls: ['./demo-http.component.scss'],
})
export class DemoHttpComponent implements OnInit {
  users: UserPlaceholder[] = [];
  subscription!: Subscription;
  subscriptionCreate!: Subscription;
  loading: boolean = false;

  constructor(private _jsonPlaceHolderUser: JsonplaceholderUserService) {}

  ngOnInit(): void {
    this.loading = true;
    this.subscription = this._jsonPlaceHolderUser.getUsers().subscribe({
      next: (users) => {
        this.users = users;
      },
      error: (error) => {
        console.log(error);
      },
      complete: () => {
        this.subscription.unsubscribe();
        this.loading = false;
      },
    });
  }

  addUser() {
    const data: UserPlaceholder = {
      id: 0,
      name: 'Bobo le Bubu',
      username: 'BblBb',
      email: 'bobo@bubu.biz',
      address: {
        street: 'Kulas Light',
        suite: 'Apt. 556',
        city: 'Gwenborough',
        zipcode: '92998-3874',
        geo: {
          lat: '-37.3159',
          lng: '81.1496',
        },
      },
      phone: '1-770-736-8031 x56442',
      website: 'hildegard.org',
      company: {
        name: 'Romaguera-Crona',
        catchPhrase: 'Multi-layered client-server neural-net',
        bs: 'harness real-time e-markets',
      },
    };
    this.loading = true;
    this.subscriptionCreate = this._jsonPlaceHolderUser
      .addUser(data)
      .subscribe({
        next: (user) => {
          this.users.push(user);
        },
        error: (error) => {
          console.log(error);
        },
        complete: () => {
          console.log('Done');
          this.subscriptionCreate.unsubscribe();
          this.loading = false;
        },
      });
  }
}
