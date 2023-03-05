import {NgModule} from '@angular/core';
import {environment} from './environment';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import {AppRoutingModule} from "./app-routing.module";
import {HeaderSigninComponent} from "./components/headers/header-signin/header-signin.component";
import {HeaderCompilerPagesComponent} from './components/headers/header-compiler-pages/header-compiler-pages.component';
import {SignoutComponent} from './pages/signout/signout.component';
import {SigninComponent} from './pages/signin/signin.component';
import {TeachersPageComponent} from './pages/admin/teachers/teachers-page/teachers-page.component';
import {AudiencesPageComponent} from './pages/admin/audiences/audiences-page/audiences-page.component';
import {SubjectsPageComponent} from './pages/admin/subjects/subjects-page/subjects-page.component';
import {GroupsPageComponent} from './pages/admin/groups/groups-page/groups-page.component';
import {HeaderAdminPagesComponent} from './components/headers/header-admin-pages/header-admin-pages.component';
import {MainPageComponent} from './pages/admin/main/main-page/main-page.component';

import {AppComponent} from './app.component';

import {GroupElementComponent} from './pages/admin/groups/group-element/group-element.component';
import {ConfirmationComponent} from './components/confirmation/confirmation.component';
import {GroupModalComponent} from './pages/admin/groups/group-modal/group-modal.component';
import {AudienceModalComponent} from './pages/admin/audiences/audience-modal/audience-modal.component';
import {AudienceElementComponent} from './pages/admin/audiences/audience-element/audience-element.component';
import {SubjectModalComponent} from './pages/admin/subjects/subject-modal/subject-modal.component';
import {SubjectElementComponent} from './pages/admin/subjects/subject-element/subject-element.component';
import {IAudienceService} from './services/i-audience.service';
import {ISubjectService} from "./services/i-subject.service";
import {IGroupService} from "./services/i-group.service";
import {ITeacherService} from "./services/i-teacher.service";
import {TeacherModalComponent} from './pages/admin/teachers/teacher-modal/teacher-modal.component';
import {TeacherElementComponent} from './pages/admin/teachers/teacher-element/teacher-element.component';
import {
  SearchAudienceFramePipe,
  SearchAudienceNamePipe,
  SearchAudienceNumberPipe
} from './pages/admin/audiences/search-audience/search-audience.pipe';
import {SearchSubjectsPipe} from './pages/admin/subjects/search-subjects/search-subjects.pipe';

@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    SignoutComponent,
    TeachersPageComponent,
    SubjectsPageComponent,
    MainPageComponent,
    HeaderSigninComponent,
    HeaderCompilerPagesComponent,
    HeaderAdminPagesComponent,
    ConfirmationComponent,
    GroupsPageComponent,
    GroupModalComponent,
    GroupElementComponent,
    AudiencesPageComponent,
    AudienceModalComponent,
    AudienceElementComponent,
    SubjectModalComponent,
    SubjectElementComponent,
    TeacherModalComponent,
    TeacherElementComponent,
    SearchAudienceNamePipe,
    SearchAudienceFramePipe,
    SearchAudienceNumberPipe,
    SearchSubjectsPipe,
    SearchSubjectsPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [
    { provide: IGroupService, useClass: environment.groupService },
    { provide: IAudienceService, useClass: environment.audienceService },
    { provide: ISubjectService, useClass: environment.subjectService },
    { provide: ITeacherService, useClass: environment.teacherService },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
