import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientRoutingModule } from './client-routing.module';


import { ClientDetailsComponent } from './pages/client-details/client-details.component';
import { SharedModule } from '../shared/shared.module';
import { ClientListComponent } from './pages/client-list/client-list.component';
import { ListBoxComponent } from './components/list-box/list-box.component';
import { CreateClientComponent } from './modals/create-client/create-client.component';




@NgModule({
  declarations: [
    ClientDetailsComponent,
    ClientListComponent,
    ListBoxComponent,
    CreateClientComponent
  ],
  imports: [
    CommonModule,
    ClientRoutingModule,
    SharedModule
    
  ],
  exports:[ ]
})
export class ClientsModule { }
