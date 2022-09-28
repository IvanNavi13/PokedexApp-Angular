import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent{
  loginForm !: FormGroup;
  error : string = '';

  constructor(public authService: AuthService, private formBuilder: FormBuilder) {
    this.authService.setSession();
  }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username : ['', Validators.required],
      password : ['', Validators.required]
    });
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

  onSubmit(){
    let username : string = this.loginForm.get('username')?.value;
    let password : string = this.loginForm.value.password;

    if(this.authService.getToken(username,password)){
      this.error = 'Usuario incorrecto';
    }else{
      this.error = '';
    }

    //this.authService.saveSession(username,password);
    }


}
