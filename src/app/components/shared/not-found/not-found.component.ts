import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent{

  constructor(public authService: AuthService) {
    this.authService.setSession();
  }

  login(){
    this.authService.login();
  }
  
  logout(){
    this.authService.logout();
  }

  showSession(){
    return this.authService.showSession();
  }

}
