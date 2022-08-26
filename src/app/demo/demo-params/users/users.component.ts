import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { User } from 'src/app/models/user';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit, OnDestroy {
  user!: User;
  param!: string;
  subscription!: Subscription;

  constructor(
    private userService: UsersService,
    private _activatedRoute: ActivatedRoute,
    private _router: Router
  ) {}
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  ngOnInit(): void {
    this.subscription = this._activatedRoute.params.subscribe({
      next: ({ id }) => {
        if (id) {
          const user = this.userService.getUser(parseInt(id));
          if (user) {
            this.user = user;
          } else {
            this._router.navigate(['demos/params']);
          }
        } else {
          this._router.navigate(['demos/params']);
        }
      },
    });
  }
}
