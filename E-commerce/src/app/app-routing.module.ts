//ng dependencies
import { NgModule }                       from '@angular/core';
import { Routes, RouterModule }           from '@angular/router';

//component dependecies
import { CardviewComponent }              from './admin/admin/cardview.component';
import { CardDetailsComponent }       from './admin/card-details/card-details.component';
import { OrderlistComponent }             from './order/orderlist/orderlist.component';
import { EditCardComponent }          from './admin/edit-card/edit-card.component';
import { NewCardComponent }           from './admin/new-card/new-card.component';
import { OrderDetailsComponent }          from './order/order-details/order-details.component';
import { OrderAllDetailsComponent }       from './order/order-all-details/order-all-details.component';


//routing 
const routes: Routes = [
  { path: '', component: CardviewComponent },
  { path: '*', component: CardviewComponent },
  { path:'viewdetails/:id',component:CardDetailsComponent},
  { path:'cardlist',component:OrderlistComponent},
  { path:'editcard/:id',component:EditCardComponent},
  { path:'newcard',component:NewCardComponent},
  { path:'orderdetails/:id',component:OrderDetailsComponent},
  { path:'orderalldetails',component:OrderAllDetailsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
