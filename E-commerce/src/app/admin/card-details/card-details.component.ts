//ng dependecies
import { Component, OnInit }        from '@angular/core';
import { HttpClient }               from '@angular/common/http';
import { ActivatedRoute }           from "@angular/router";

@Component({
  selector:     'app-card-details',
  templateUrl:  './card-details.component.html',
  styleUrls:    ['./card-details.component.css']
})

export class CardDetailsComponent implements OnInit {

  //constructor 
  constructor(private httpClient: HttpClient, private route: ActivatedRoute) { }
  cardDetail = [];
  id: string;

  //Get data from json server using http client
  getCardDetails = function () {
    console.log(this.id)
    this.httpClient.get(`http://localhost:3000/itemDetails/` + this.id)
      .subscribe(
        (data) => {
          console.log(data);
          this.cardDetail = data;
        }
      )
  }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get("id");
    this.getCardDetails();
  }
}
