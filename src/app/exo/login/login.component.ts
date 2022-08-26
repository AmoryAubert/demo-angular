import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { LoginServiceService } from 'src/app/services/login-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  connectedUser: User | undefined;

  login: string = '';
  pwd: string = '';

  constructor(private _loginService: LoginServiceService) {}

  ngOnInit(): void {
    this.connectedUser = this._loginService.connectedUser;
  }

  connection(): void {
    //Si la personne n'a rien tapé dans login, on n'appelle pas le service pour rien
    if (this.login.trim() != '') {
      this._loginService.connect(this.login, this.pwd);
      this.connectedUser = this._loginService.connectedUser;
      //Si la personne s'est connectée, on vire les infos des input
      if (this.connectedUser) {
        this.login = '';
        this.pwd = '';
      }
    }
  }

  deconnection(): void {
    this._loginService.disconnect();
    this.connectedUser = this._loginService.connectedUser;
  }
}
