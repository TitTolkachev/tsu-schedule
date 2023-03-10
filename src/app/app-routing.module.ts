import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {RoutingGuard} from "./routing-guard";
import {SigninComponent} from "./pages/signin/signin.component";
import {SignoutComponent} from "./pages/signout/signout.component";
import {TeachersPageComponent} from "./pages/admin/teachers/teachers-page/teachers-page.component";
import {AudiencesPageComponent} from "./pages/admin/audiences/audiences-page/audiences-page.component";
import {SubjectsPageComponent} from "./pages/admin/subjects/subjects-page/subjects-page.component";
import {GroupsPageComponent} from "./pages/admin/groups/groups-page/groups-page.component";
import {MainPageComponent} from "./pages/admin/main/main-page/main-page.component";
import {RequestsPageComponent} from './pages/admin/requests/requests-page/requests-page.component';

import {UsersPageComponent} from './pages/admin/users/users-page/users-page.component';

const routes: Routes = [
  { path: '', component: SigninComponent },
  { path: 'signin', component: SigninComponent, canActivate: [RoutingGuard] },
  { path: 'signout', component: SignoutComponent, canActivate: [RoutingGuard] },
  { path: 'admin/teachers', component: TeachersPageComponent },
  { path: 'admin/audiences', component: AudiencesPageComponent },
  { path: 'admin/subjects', component: SubjectsPageComponent },
  { path: 'admin/groups', component: GroupsPageComponent },
  { path: 'admin/main', component: MainPageComponent },
  { path: 'admin/users', component: UsersPageComponent },
  { path: 'admin/requests', component: RequestsPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
