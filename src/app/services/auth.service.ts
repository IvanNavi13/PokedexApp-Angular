import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public auth: boolean = false;
  
  constructor() { }

  login(){
    this.auth = true;
    localStorage.setItem('auth', this.auth.toString())
  }

  logout(){
    this.auth = false;
    localStorage.clear();
  }

  showSession(){
    this.auth = (localStorage.getItem('auth')?.toLowerCase() == 'true');  //para almacenar en el localStorage si es que se cierra el navegador
    return this.auth;
  }

  setSession() {
    this.auth = (localStorage.getItem('auth')?.toLowerCase() == 'true');
  } 
  /**
   * Se puede colocar en el constructor, en el componente prinipal o en un guard.  Todo depende de la regla de negocio que se aplique
   */

}
