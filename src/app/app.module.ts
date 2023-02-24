import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from "@angular/common/http";
import { FormsModule} from "@angular/forms";

import { AppRoutingModule} from "./app-routing.module";

import { HeaderSigninComponent } from "./components/header-signin/header-signin.component";

import { SigninComponent } from './pages/signin/signin.component';
import { TeachersPageComponent } from './pages/admin/teachers/teachers-page/teachers-page.component';
import { AudiencesPageComponent } from './pages/admin/audiences/audiences-page/audiences-page.component';
import { SubjectsPageComponent } from './pages/admin/subjects/subjects-page/subjects-page.component';
import { GroupsPageComponent } from './pages/admin/groups/groups-page/groups-page.component';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent,
    TeachersPageComponent,
    SigninComponent,
    AudiencesPageComponent,
    SubjectsPageComponent,
    GroupsPageComponent,
    HeaderSigninComponent,
    HeaderCompilerPagesComponent
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
