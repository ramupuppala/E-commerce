//ng dependencies

import { Component, OnInit, ViewChild }         from '@angular/core';
import { HttpClient, HttpHeaders }              from '@angular/common/http';
import { ActivatedRoute,Router }                from "@angular/router";
import { NgForm }                               from '@angular/forms';

@Component({
  selector:       'app-new-card',
  templateUrl:    './new-card.component.html',
  styleUrls:      ['./new-card.component.css']
})

export class NewCardComponent implements OnInit {

  constructor(private httpClient: HttpClient, private route: ActivatedRoute,private router:Router) { }
  id: string;
  state: string
  @ViewChild('f') newCard: NgForm;
  length = 0;
  cardDetails=[];
  lenghtOfCardData=0;

  //Get data from json server using Http 
  getCardDetails = function () {
    this.httpClient.get(`http://localhost:3000/itemDetails`)
      .subscribe(
        (data) => {
          this.length = data.length;
          console.log(this.length);
          this.cardDetails=data;
          console.log( this.cardDetails[this.cardDetails.length - 1].id);
          this.lenghtOfCardData=this.cardDetails[this.cardDetails.length -1].id + 1;
          
        }
      )
  }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get("id");
    this.getCardDetails();
  }

  //Adding new card details to json server using Http
  onSubmit() {
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json; charset=utf-8');
    this.newCard.value.id = this.lenghtOfCardData;
    this.state = this.newCard.value.state;
    this.newCard.value.state = {
      name: this.state
    }

    this.httpClient.post(`http://localhost:3000/itemDetails`, this.newCard.value, { headers: headers })
      .subscribe(
        (data) => {
          console.log("success")
          this.router.navigate(['/']); 
        }
      )

  }


}
