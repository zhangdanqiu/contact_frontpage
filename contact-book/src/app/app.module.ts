import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddContactComponent } from './add-contact/add-contact.component';
import { ShowcontactComponent } from './showcontact/showcontact.component';
import { ViewDetailComponent } from './view-detail/view-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    AddContactComponent,
    ShowcontactComponent,
    ViewDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
