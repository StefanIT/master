import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { map } from 'rxjs/operators';


import { JwtHelper } from 'angular2-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: Http) {
  }

  login(credentials) { 
   return this.http.post('/api/authenticate', 
      JSON.stringify(credentials)).pipe(
        map(
          response => {
            let result = response.json();
            if(result && result.token){
              localStorage.setItem('token', result.token);
              return true;
            }
            return false;
          }
        )
      );
  }

  logout() { 
    localStorage.removeItem('token');
    alert('You are logged out!')
  }

  isLoggedIn() { 
    let jwt = new JwtHelper();
    let token = localStorage.getItem('token');

    if(!token)
      return false;
    let expire = jwt.getTokenExpirationDate(token);
    let isExpire = jwt.isTokenExpired(token);

    return !isExpire;
  }
}
