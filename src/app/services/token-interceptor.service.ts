import { Injectable } from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {AuthService} from "./auth.service";
import {catchError, Observable, throwError} from "rxjs";
import {TOKEN_KEY} from "../constants";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (this.authService.isLogged()) {
      req = req.clone({
        setHeaders: {
          Authorization: `Bearer ${localStorage.getItem(TOKEN_KEY)}`
        }
      })
    }
    return next.handle(req).pipe(
      catchError(err => {
        if (err.status === 401) {
          this.authService.signOut()
          this.router.navigateByUrl("/signin").then()
        }
        return throwError(err)
      })
    )
  }
}
