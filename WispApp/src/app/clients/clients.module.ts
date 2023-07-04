import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientPageComponent } from './pages/client/client-page.component';
import { ClientDetailsComponent } from './pages/client-details/client-details.component';



@NgModule({
  declarations: [
    ClientPageComponent,
    ClientDetailsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ClientsModule { }
