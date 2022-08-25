import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  user!: User;
  param!: string;
  constructor(
    private userService: UsersService,
    private _activatedRoute: ActivatedRoute,
    private _router: Router
  ) {
    this._router.events.subscribe({
      next: (event) => {
        if (event instanceof NavigationEnd) {
          this.param = this._activatedRoute.snapshot.params['id'];
          if (this.param) {
            const user = this.userService.getUser(parseInt(this.param));
            if (user) {
              this.user = user;
            } else {
              this._router.navigate(['demos/params']);
            }
          } else {
            this._router.navigate(['demos/params']);
          }
        }
      },
    });
  }
  ngOnInit(): void {}
}
