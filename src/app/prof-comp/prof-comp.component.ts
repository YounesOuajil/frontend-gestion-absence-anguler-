import { Router ,ActivatedRoute} from '@angular/router';
import { Component,OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-prof-comp',
  templateUrl: './prof-comp.component.html',
  styleUrl: './prof-comp.component.css'
})
export class ProfCompComponent  {

  constructor( public router: Router, public auth: AuthService,public route: ActivatedRoute){
    
  }


 



  logout(){
    this.auth.islogdin=false;
    this.router.navigate(['/login']);
  }

}
