import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../../interfaces/user.interface';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }

  

  singup(user: User) {
    console.log(" a guardar "+user)
    console.log(user)
    return this.http.post(`${this.baseUrl}/new-user`, user);
  }

  login(username: string, password: string) {
    const body = { username, password };
    return this.http.post(`${this.baseUrl}/login`, body);
  }

  cargardinero(id:number, dinero_real:number, moneda_virtual:number){
    return this.http.put(`${this.baseUrl}/cargar-dinero/${id}/${dinero_real}/${moneda_virtual}`,null  );
  }
  descontardinero(id:number, dinero_real:number, moneda_virtual:number){
    return this.http.put(`${this.baseUrl}/descontar-dinero/${id}/${dinero_real}/${moneda_virtual}`,null  );
  }
}
