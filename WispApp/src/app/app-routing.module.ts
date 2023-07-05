import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home/pages/home/home-page.component';

export const routes: Routes = [
    {
        path:'home',
        component: HomePageComponent
    },{
        path:'client',
        loadChildren: () => import('./clients/clients.module').then(m => m.ClientsModule)
    },{
        path:'**',
        redirectTo: 'home'
    },
];
@NgModule({
    imports: [  
        RouterModule.forRoot(routes)
    ],
    exports: [  RouterModule    ],
    declarations: [],
    providers: [],
})
export class AppRoutingModule { }
