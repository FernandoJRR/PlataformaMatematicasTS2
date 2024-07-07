import { Injectable } from '@angular/core';
import { User } from '../interfaces/user.interface';


@Injectable({
  providedIn: 'root',
})
export class GlobalsService {
  private baseUrl = 'http://localhost:3001/';

  getBaseUrl() {
    return this.baseUrl;
  }

  addUser(username: string) {
    localStorage.setItem('tmpUser', JSON.stringify({ username }));
  }

  getUser() {
    const user =
      localStorage.getItem('actualUser') ||
      localStorage.getItem('tmpUser') ||
      '{}';
    return JSON.parse(user) as User;
  }

  getTipoUser():string {
    const tipo =
      localStorage.getItem('tipoUser')
    return tipo as string;
  }

  
  

  deleteUser() {
    localStorage.removeItem('actualUser');
  }
}