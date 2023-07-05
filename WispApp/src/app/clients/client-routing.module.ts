import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ClientDetailsComponent } from './pages/client-details/client-details.component';
import { ClientListComponent } from './pages/client-list/client-list.component';

export const routes: Routes = [{
    path: 'client-list',
    component: ClientListComponent //lista de clientes
},{
    path: 'client-detail/:id',
    component: ClientDetailsComponent
},{
    path:'**',
    redirectTo: 'client-list'
}]

@NgModule({
    imports:[
        RouterModule.forChild(routes)
    ],
    exports:[
        RouterModule
    ]
})
export class ClientRoutingModule {}