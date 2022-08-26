import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class LoginServiceService {
  private users: User[] = [
    {
      id: 0,
      lastname: 'Beurive',
      firstname: 'Aude',
      login: 'audeb',
      password: '1234',
    },
    {
      id: 1,
      lastname: 'Ly',
      firstname: 'Khun',
      login: 'khunl',
      password: '5678',
    },
    {
      id: 2,
      lastname: 'Lorent',
      firstname: 'Steve',
      login: 'stevel',
      password: '147',
    },
  ];

  connectedUser: User | undefined;

  constructor() {}

  connect(connectLogin: string, connectPassword: string): void {
    //On va vérifier si le login reçu est présent dans notre fakebdd d'utilisateurs
    this.connectedUser = this.users.find((user) => user.login == connectLogin);
    if (this.connectedUser) {
      //Si on l'a trouvé, si le password n'est pas ok
      if (this.connectedUser.password !== connectPassword) {
        this.connectedUser = undefined;
      }
      localStorage.setItem('user', JSON.stringify(this.connectedUser));
    }
    //Si le login n'est pas présent en bdd, l'utilisateur n'existe pas
    else {
      this.connectedUser = undefined;
    } //Même pas obligatoire puisqu'on stock déjà undefined si pas trouvé avec la méthode .find()
  }

  disconnect(): void {
    localStorage.removeItem('user');
    this.connectedUser = undefined;
  }
}
