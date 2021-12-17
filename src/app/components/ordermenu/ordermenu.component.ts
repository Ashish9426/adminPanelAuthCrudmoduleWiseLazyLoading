import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { OrderService } from 'src/app/shared/services/order.service';

@Component({
  selector: 'app-ordermenu',
  templateUrl: './ordermenu.component.html',
  styleUrls: ['./ordermenu.component.css']
})
export class OrdermenuComponent implements OnInit {

  orders:any

  constructor(private _toast:ToastrService, private _orderService:OrderService) { }

  ngOnInit(): void {
    this.LoadOrder()
  }

  LoadOrder(){
    this._orderService.GetAllOrders().subscribe(r=>{
      //console.log(r)
      this.orders=r;
    })
  }

  RemoveOrder(id:number){
    this._orderService.DeleteOrder(id).subscribe((result:any)=>{
      this.LoadOrder()
      this._toast.info("Order removed successfully. ","Message")
    })
  }

}
