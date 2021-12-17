import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { ToastrService } from 'ngx-toastr';
import { faGrin } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  // src1="https://www.chetu.com/img/chetu-logo-white.png";
  src1 = "https://www.logotaglines.com/wp-content/uploads/2021/01/Swiggy-Logo-Tagline-Slogan.jpg"
  faSignOutAlt=faSignOutAlt
  faGrin = faGrin


  data:any
  pp:any
  nn:any


  constructor(private _router:Router, private _toast:ToastrService) { 
    let record:any
    let data:any
    record = localStorage.getItem("newUser")
    console.log(record)
    console.log(typeof(record))
    data = JSON.parse(record)
    let f=data.fname;
    let l=data.lname;
    this.nn = f
    console.log(f)
    console.log(l)

  }

  ngOnInit(): void {

    }

  logout(){
    this._router.navigate(["/login"])
    this._toast.success("Successfully Logout","Thanks",{timeOut:5000})
    
    }

}