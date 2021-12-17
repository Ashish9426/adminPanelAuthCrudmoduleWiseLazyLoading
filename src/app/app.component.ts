import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { faGrin, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { ToastrService } from 'ngx-toastr';
import {AuthenticationService} from './auth/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'moduleWiseProject';

  loggedInUser:any;
  faSignOutAlt=faSignOutAlt
  faGrin = faGrin

  data:any
  pp:any
  nn:any

  src1 = "https://www.logotaglines.com/wp-content/uploads/2021/01/Swiggy-Logo-Tagline-Slogan.jpg"

  constructor(private authService:AuthenticationService,
    private _router:Router,
    private _toast:ToastrService){}

  ngOnInit(){
    this.authService.loggedInUser.subscribe(
      data=>{
        this.loggedInUser=data;
        if(!this.loggedInUser && localStorage.getItem("loggedInStatus")=="true"){
          let user=JSON.parse(localStorage.loggedInDetails);
          this.authService.authentication(user.username,user.password);
        }
        console.log("logged user ",data);
      }
    ) ;
  }

  logout(){
    this.authService.logout();
    this._router.navigate(["/login"])
    this._toast.success("Successfully Logout","Thanks",{timeOut:5000})
    }
}
