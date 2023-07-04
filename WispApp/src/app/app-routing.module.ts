import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home/pages/home/home-page.component';
import { ClientPageComponent } from './clients/pages/client/client-page.component';

export const routes: Routes = [
    {
        path:'home',
        component: HomePageComponent
    },{
        path:'client',
        component: ClientPageComponent
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
