import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import { SigninComponent } from './pages/signin/signin.component';
import {AppRoutingModule} from "./app-routing.module";
import { TeachersPageComponent } from './pages/admin/teachers/teachers-page/teachers-page.component';
import { AudiencesPageComponent } from './pages/admin/audiences/audiences-page/audiences-page.component';

@NgModule({
  declarations: [
    AppComponent,
    TeachersPageComponent,
    SigninComponent,
    AudiencesPageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
