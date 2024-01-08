import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-admin-comp',
  templateUrl: './admin-comp.component.html',
  styleUrl: './admin-comp.component.css'
})
export class AdminCompComponent {
  constructor(public auth:AuthService,public route:Router){

  }
  

  logout(){
    this.auth.islogdin=false;
    this.route.navigate(['/']);
  }
}
