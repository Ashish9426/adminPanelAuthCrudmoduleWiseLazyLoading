import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms'
import { OrderService } from 'src/app/shared/services/order.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ordernow',
  templateUrl: './ordernow.component.html',
  styleUrls: ['./ordernow.component.css']
})

export class OrdernowComponent implements OnInit {

  orderdata:FormGroup

  constructor(private _orderService:OrderService, private _toast:ToastrService, private _router:Router){

      this.orderdata=new FormGroup({
        
      "item":new FormControl('', Validators.required),
      "customer":new FormControl('', Validators.required)
    })
  }

  ngOnInit(): void {
  }

  submit(){
    let order= {...this.orderdata.value};
    order["time"]=new Date()
    this._orderService.CreateOrder(order).subscribe((result:any)=>{
    this._toast.success("Order successfully placed.","Thanks",{timeOut:5000})
    this.orderdata.reset()
    })
  }
}