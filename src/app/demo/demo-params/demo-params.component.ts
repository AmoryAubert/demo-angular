import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UsersService } from './services/users.service';

@Component({
  selector: 'app-demo-params',
  templateUrl: './demo-params.component.html',
  styleUrls: ['./demo-params.component.scss'],
})
export class DemoParamsComponent implements OnInit {
  users: User[] = [];

  constructor(private userService: UsersService) {}

  ngOnInit(): void {
    this.users = this.userService.getUsers();
  }
}
