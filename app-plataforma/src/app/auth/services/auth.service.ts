import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../../interfaces/user.interface';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  

  singup(user: User) {
    console.log(" a guardar "+user)
    console.log(user)
    return this.http.post(`${this.baseUrl}/usuario`, user);
  }

  login(username: string, password: string) {
    const body = { username, password };
    return this.http.post(`${this.baseUrl}/usuario/validate`, body);
  }

  
}
