//ng dependencies
import { Component, OnInit }        from '@angular/core';
import {HttpClient } from           '@angular/common/http';
import { ActivatedRoute }            from "@angular/router";

@Component({
  selector:     'app-order-all-details',
  templateUrl:   './order-all-details.component.html',
  styleUrls:     ['./order-all-details.component.css']
})
export class OrderAllDetailsComponent implements OnInit {

  constructor(private httpClient:HttpClient,private route: ActivatedRoute) { }
  orderDetails=[];
  id:string;
  totalCost=0;
  totalItemCost=[];
  
  //get data from json server

  getCustomerDetails=function()
  {
    console.log(this.id)
     this.httpClient.get(`http://localhost:3000/data/`)
     .subscribe(
       (data)=>
       {
         console.log(data);        
         this.orderDetails=data; 
         debugger;   
         for(let j=0;j<data.length;j++)
         {
          if (data[j].orders) {
          for(let i=0;i<data[j].orders.length;i++)
          {
            this.totalCost+=data[j].orders[i].itemCost;
          }
        }
          this.totalItemCost[data[j].id]=this.totalCost.toFixed(2);
          this.totalCost=0;
         }   
         
       }
     )
   }
  ngOnInit()
  {
  
    this.getCustomerDetails();
  } 
}
