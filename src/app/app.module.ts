import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import {AppRoutingModule} from "./app-routing.module";
import { SigninComponent } from './pages/signin/signin.component';
import { SignoutComponent } from './pages/signout/signout.component';
import { TeachersPageComponent } from './pages/admin/teachers/teachers-page/teachers-page.component';
import { AudiencesPageComponent } from './pages/admin/audiences/audiences-page/audiences-page.component';
import { SubjectsPageComponent } from './pages/admin/subjects/subjects-page/subjects-page.component';
import { GroupsPageComponent } from './pages/admin/groups/groups-page/groups-page.component';
import { MainPageComponent } from './pages/admin/main/main-page/main-page.component';

@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    SignoutComponent,
    TeachersPageComponent,
    AudiencesPageComponent,
    SubjectsPageComponent,
    GroupsPageComponent,
    MainPageComponent
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
