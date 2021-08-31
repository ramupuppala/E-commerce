import { Component, OnInit }      from '@angular/core';
import {HttpClient }              from '@angular/common/http';
import { ActivatedRoute }         from "@angular/router";

@Component({
  selector:      'app-order-details',
  templateUrl:   './order-details.component.html',
  styleUrls:     ['./order-details.component.css']
})

export class OrderDetailsComponent implements OnInit {

  constructor(private httpClient:HttpClient,private route: ActivatedRoute) { }
  orderDetails=[];
  id:string;
  totalItemCost=0;

  //Get data from json server using Http
  getCustomerDetails=function()
  {
    console.log(this.id)
     this.httpClient.get(`http://localhost:3000/data/`+this.id)
     .subscribe(
       (data)=>
       {
         console.log(data);        
         this.orderDetails=data; 
         debugger;      
          for(let i=0;i<data.orders.length;i++)
          {console.log(this.totalItemCost)
            this.totalItemCost+=data.orders[i].itemCost
          }
          this.totalItemCost=this.totalItemCost.toFixed(2);
       }
     )
   }
  ngOnInit()
  {
    this.id=this.route.snapshot.paramMap.get("id");
    this.getCustomerDetails();
  }
}

