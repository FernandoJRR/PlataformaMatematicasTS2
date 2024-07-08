import { Component } from '@angular/core';
import { GlobalsService } from '../../../globals/globals.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-admin',
  templateUrl: './home-admin.component.html',
  styleUrl: './home-admin.component.css',
})
export class HomeAdminComponent {
  //Constructor
  constructor(private globalService: GlobalsService, private router: Router) {}

  logout() {
    this.globalService.deleteUser();
    console.log('User logged out');
    this.router.navigate(['/login']);
  }
}
