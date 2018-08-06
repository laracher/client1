import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { UserComponent } from './client/client.component';
import { AppRoutingModule } from './app.routing.module';
import {UserService} from './client/client.service';
import {HttpClientModule} from "@angular/common/http";
import {AddUserComponent} from './client/add-client.component';
import { ClientInfoComponent } from './client/client-info.component';


@NgModule({
  declarations: 
  [
    AppComponent,
    UserComponent,
    AddUserComponent,
    ClientInfoComponent
  ],
  imports: 
  [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }