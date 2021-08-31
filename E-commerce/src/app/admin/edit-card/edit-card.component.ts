//ng dependencies
import { Component, OnInit ,ViewChild}          from '@angular/core';
import {HttpClient ,HttpHeaders}                from '@angular/common/http';
import { ActivatedRoute,Router }                from "@angular/router";
import { NgForm }                               from '@angular/forms';


@Component({
  selector:     'app-edit-card',
  templateUrl:  './edit-card.component.html',
  styleUrls:    ['./edit-card.component.css']
})

export class EditCardComponent implements OnInit { 
  
  id:string;
  cardDetail=[];
  state:string;
  @ViewChild('f') cardUpdate:NgForm;
  constructor(private httpClient:HttpClient,private route: ActivatedRoute,private router:Router) { }
 
  // Get card data from json server using Http calls

  getCardDetails=function()
  {
    console.log(this.id)
     this.httpClient.get(`http://localhost:3000/itemDetails/`+this.id)
     .subscribe(
       (data)=>
       {
         console.log(data);        
         this.cardDetail=data;
         
       }
     )
   }
   //ng initialization
  ngOnInit()
  {
    this.id=this.route.snapshot.paramMap.get("id");
    this.getCardDetails();  
  }

  //submit data to json server using httpclient 
  onSubmit() {
    var headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json; charset=utf-8');
    this.httpClient.put(`http://localhost:3000/itemDetails/`+this.id, this.cardUpdate.value, { headers: headers })
    .subscribe(
      (data) => {
        console.log("success")
        this.router.navigate(['/']); 
      }
    )
  }

  //This method used for deleting card details
  deleteCard(){
    this.httpClient.delete(`http://localhost:3000/itemDetails/`+this.id)
    .subscribe(
      (data)=>
      {
        console.log("success")   
        this.router.navigate(['/']);  
       
      }
    )
  }


}
