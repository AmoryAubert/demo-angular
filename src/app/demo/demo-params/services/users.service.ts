import { Injectable } from '@angular/core';
import { User } from '../../../models/user';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  users: User[] = [
    {
      id: 1,
      firstname: 'John',
      lastname: 'Doe',
      login: 'johndoe',
      password: 'j',
    },
    {
      id: 2,
      firstname: 'Jane',
      lastname: 'Doe',
      login: 'janedoe',
      password: 'j',
    },
    {
      id: 42,
      firstname: 'Tirsathielle',
      lastname: 'Fireclaw',
      login: 'Tirfir',
      password: 'tf',
    },
  ];

  constructor() {}

  getUsers() {
    return this.users;
  }
  getUser(id: number) {
    return this.users.find((u) => u.id === id);
  }
}
