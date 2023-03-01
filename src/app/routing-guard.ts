import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from "@angular/router";
import {Injectable} from "@angular/core";
import {AuthService} from "./services/auth.service";

@Injectable({
  providedIn: 'root'
})
export class RoutingGuard implements CanActivate {

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean | UrlTree {
    if (this.authService.isLogged()) {
      if (state.url == '/signin' || state.url == '/signup') {
        return this.router.parseUrl("/")
      }
    }
    else {
      if (state.url != '/signin' && state.url != '/signup') {
        return this.router.parseUrl("/signin")
      }
    }
    return true;
  }
}
