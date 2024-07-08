import { Component } from '@angular/core';
import { GlobalsService } from '../../../globals/globals.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  //Constructor
  constructor(private globalService: GlobalsService, private router: Router) {}

  logout() {
    this.globalService.deleteUser();
    console.log('User logged out');
    this.router.navigate(['/login']);
  }
}
