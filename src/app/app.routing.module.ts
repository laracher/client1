import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserComponent } from './client/client.component';
import {AddUserComponent} from './client/add-client.component';
import { ClientInfoComponent } from './client/client-info.component';
import { AppComponent } from './app.component';
import { GroupComponent } from './group/group.component';
import { GroupEditComponent } from './group/group-edit.component';

const routes: Routes = 
[
    { path: '', component: AppComponent },
    { path: 'users', component: UserComponent },
    { path: 'add', component: AddUserComponent },
    { path: 'client-info', component: ClientInfoComponent },
    { path: 'groups', component: GroupComponent },
    { path: 'group-edit', component: GroupEditComponent }
];

@NgModule
({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ],
    declarations: []
})
export class AppRoutingModule { }