import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SigninComponent} from "./pages/signin/signin.component";
import {TeachersPageComponent} from "./pages/admin/teachers/teachers-page/teachers-page.component";
import {AudiencesPageComponent} from "./pages/admin/audiences/audiences-page/audiences-page.component";
import {SubjectsPageComponent} from "./pages/admin/subjects/subjects-page/subjects-page.component";

const routes: Routes = [
  { path: '', component: SigninComponent },
  { path: 'signin', component: SigninComponent },
  { path: 'admin/teachers', component: TeachersPageComponent },
  { path: 'admin/audiences', component: AudiencesPageComponent },
  { path: 'admin/subjects', component: SubjectsPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
