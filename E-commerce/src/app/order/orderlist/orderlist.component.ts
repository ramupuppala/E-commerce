//ng dependencies
import { Component, OnInit }      from '@angular/core';
import { HttpClient }             from '@angular/common/http';

@Component({
  selector:      'app-orderlist',
  templateUrl:   './orderlist.component.html',
  styleUrls:     ['./orderlist.component.css']
})
export class OrderlistComponent implements OnInit {

  constructor(private httpClient: HttpClient) { }
  count = 0;
  customerDetails = [];
  orderTotal = {};

  //Get data from json server using Http
  getCustomerDetails = function () {
    this.httpClient.get(`http://localhost:3000/data`)
      .subscribe(
        (data) => {

          this.customerDetails = data;
          for (let i = 0; i < data.length; i++) {

            let orderSum = 0;
            if (data[i].orders) {
              for (let j = 0; j < data[i].orders.length; j++) {
                orderSum = orderSum + data[i].orders[j].itemCost;              }
              this.orderTotal[data[i].id] = orderSum.toFixed(2);
            }
            else{
              this.orderTotal[data[i].id] = orderSum
            }

          }
          console.log(this.orderTotal);
        }
      )
  }
  ngOnInit() {

    this.getCustomerDetails();
  }

}
