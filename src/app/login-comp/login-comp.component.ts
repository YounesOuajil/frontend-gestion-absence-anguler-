import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login-comp',
  templateUrl: './login-comp.component.html',
  styleUrls: ['./login-comp.component.css'] 
})
export class LoginCompComponent {
  Username!: string;
  Password!: string;

  constructor(public auth:AuthService, private route:Router){
    
    
  }

  login(){
    if(this.Username==='admin'){
      this.auth.islogdin=true;
      this.route.navigate(['/admin-comp'])
    }
    else if(this.Username==='prof'){
      this.auth.islogdin=true;
      this.route.navigate(['/prof-comp'])
    }
   
  }

  

  
}
