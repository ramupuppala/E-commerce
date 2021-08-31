//ng dependencies
import { BrowserModule }                      from '@angular/platform-browser';
import { NgModule }                           from '@angular/core';
import {HttpClientModule }                    from '@angular/common/http';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';

//component dependencies
import { AppRoutingModule }                   from './app-routing.module';
import { AppComponent }                       from './app.component';
import { CardviewComponent }                  from './admin/admin/cardview.component';
import { NavigationComponent }                from './navigation/navigation.component';
import { CardDetailsComponent }           from './admin/card-details/card-details.component';
import { OrderlistComponent }                 from './order/orderlist/orderlist.component';
import { EditCardComponent }              from './admin/edit-card/edit-card.component';
import { NewCardComponent }               from './admin/new-card/new-card.component';
import { OrderDetailsComponent }              from './order/order-details/order-details.component';
import { OrderAllDetailsComponent }           from './order/order-all-details/order-all-details.component';
import { CardPipe }                       from './card.pipe';
import { AdminHeaderComponent } from './admin-header/admin-header.component';


@NgModule({
  declarations: [
    AppComponent,
    CardviewComponent,
    NavigationComponent,
    CardDetailsComponent,
    OrderlistComponent,
    EditCardComponent,
    NewCardComponent,
    OrderDetailsComponent,
    OrderAllDetailsComponent,
    CardPipe,
    AdminHeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
