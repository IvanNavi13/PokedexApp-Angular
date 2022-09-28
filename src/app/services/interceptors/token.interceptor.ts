import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Buffer } from 'buffer';
import { AuthService } from '../auth.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(private authService : AuthService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    
    // const TOKEN : string = 'poke token';
    // console.log(TOKEN);

    // if(TOKEN == ''){
    //   return next.handle(request);
    // }

    // // const USERNAME : string = localStorage.getItem('username')?.toString() ?? '';
    // // const PASSWORD : string = localStorage.getItem('password')?.toString() ?? '';

    // // const USERNAME : string = this.authService.username;
    // // const PASSWORD : string = this.authService.password;

    // // const TOKEN : string = Buffer.from(`${USERNAME}:${PASSWORD}`).toString('base64');

    // const TOKEN: string = Buffer.from('postman:password').toString('base64');
    // const HEADER_REQUEST : HttpRequest<any> = request.clone({
    //   headers : request.headers.set('Authorization', `Basic ${TOKEN}`)
    // })
    const TOKEN : string = this.authService.token;
    if (TOKEN == ''){
      return next.handle(request);  
    }
    const HEADER_REQUEST : HttpRequest<any> = request.clone({
      headers : request.headers.set('Authorization', `Bearer ${TOKEN}`)
    })

    
    console.log(HEADER_REQUEST);
    return next.handle(HEADER_REQUEST);
  }
}
