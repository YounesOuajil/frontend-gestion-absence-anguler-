import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  islogdin!: boolean;
constructor(){
  this.islogdin=false;
}
 
}
