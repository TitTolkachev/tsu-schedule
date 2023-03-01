import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";

import {AppRoutingModule} from "./app-routing.module";

import {HeaderSigninComponent} from "./components/headers/header-signin/header-signin.component";
import {HeaderCompilerPagesComponent} from './components/headers/header-compiler-pages/header-compiler-pages.component';
import { SignoutComponent } from './pages/signout/signout.component';
import {SigninComponent} from './pages/signin/signin.component';
import {TeachersPageComponent} from './pages/admin/teachers/teachers-page/teachers-page.component';
import {AudiencesPageComponent} from './pages/admin/audiences/audiences-page/audiences-page.component';
import {SubjectsPageComponent} from './pages/admin/subjects/subjects-page/subjects-page.component';
import {GroupsPageComponent} from './pages/admin/groups/groups-page/groups-page.component';
import {HeaderAdminPagesComponent} from './components/headers/header-admin-pages/header-admin-pages.component';
import { MainPageComponent } from './pages/admin/main/main-page/main-page.component';


import {AppComponent} from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    SignoutComponent,
    TeachersPageComponent,
    AudiencesPageComponent,
    SubjectsPageComponent,
    GroupsPageComponent,
    MainPageComponent,
    GroupsPageComponent,
    HeaderSigninComponent,
    HeaderCompilerPagesComponent,
    HeaderAdminPagesComponent
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
