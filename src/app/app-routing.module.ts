import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SigninComponent} from "./pages/signin/signin.component";
import {RoutingGuard} from "./routing-guard";
import {SignoutComponent} from "./pages/signout/signout.component";

const routes: Routes = [
  { path: '', component: SigninComponent },
  { path: 'signin', component: SigninComponent, canActivate: [RoutingGuard] },
  { path: 'signout', component: SignoutComponent, canActivate: [RoutingGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
