// ng dependencies
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector:      'app-cardview',
  templateUrl:   './cardview.component.html',
  styleUrls:     ['./cardview.component.css']
})


export class CardviewComponent implements OnInit {

  constructor(private httpClient: HttpClient) { }

  cardDetails = [];
  search = "";

  //Get card details from json server using httpclient
  getCardDetails = function () {
    this.httpClient.get(`http://localhost:3000/itemDetails`)
      .subscribe(
        (data) => {
          this.cardDetails = data;
          //console.log(this.CardDetails);
        }
      )
  }
  ngOnInit() {
    this.getCardDetails();
  }


}
