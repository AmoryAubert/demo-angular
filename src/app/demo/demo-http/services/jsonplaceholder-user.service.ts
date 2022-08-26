import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserPlaceholder } from 'src/app/types';

@Injectable({
  providedIn: 'root',
})
export class JsonplaceholderUserService {
  private apiUrl: string = 'https://jsonplaceholder.typicode.com/users';

  constructor(private _httpClient: HttpClient) {}

  getUsers() {
    return this._httpClient.get<UserPlaceholder[]>(this.apiUrl);
  }

  addUser(user: UserPlaceholder) {
    return this._httpClient.post<UserPlaceholder>(this.apiUrl, user);
  }
}
