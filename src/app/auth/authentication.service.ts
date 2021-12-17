import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  loggedInUser = new BehaviorSubject(null);

  constructor() { }

  authentication(username,password){
    let user={username:username,password:password};
    this.loggedInUser.next(user);
    localStorage.setItem("loggedInStatus","true");
    localStorage.setItem("loggedInDetails",JSON.stringify(user));
  }
  
  logout(){
    this.loggedInUser.next(null);
    localStorage.setItem("loggedInStatus","false");
    localStorage.setItem("loggedInDetails","");
  }

}
