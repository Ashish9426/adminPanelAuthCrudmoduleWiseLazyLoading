import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BASEURL, EndPoint } from 'src/app/tools/utils/ApiRoute/URL';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private _httpclient:HttpClient) { }

  GetAllOrders(){
    return this._httpclient.get(`${BASEURL}${EndPoint.order}`)
   }

  CreateOrder(order:any){
    return this._httpclient.post(`${BASEURL}${EndPoint.order}`,order)
  }

  DeleteOrder(id:number){
    return this._httpclient.delete(`${BASEURL}${EndPoint.order}/${id}`)
  }
  
}