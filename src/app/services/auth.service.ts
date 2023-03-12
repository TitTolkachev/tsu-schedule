import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, of, tap} from "rxjs";
import {Token} from "../models/token";
import {SERVER_URL, TOKEN_KEY} from "../constants";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private httpClient: HttpClient
  ) { }

  signIn(email: string, password: string): Observable<Token> {
    return this.httpClient.post<Token>(
      `${SERVER_URL}/authorisation/sign-in`,
      {
        email: email,
        password: password
      }
    ).pipe(tap(e => localStorage.setItem(TOKEN_KEY, e.token)))
  }

  signOut(): Observable<void> {
    // TODO бекенд сделал костыль, поэтому мы не отправляем sign-out на данный момент
    // Если отправить sign-out с истекшим токеном, то вернется 401
    // Если отправить sign-out без токена, то вернется 403

    /*return this.httpClient.post(
      `${SERVER_URL}/authorisation/sign-out`,
      {}
    ).pipe(tap(() => localStorage.removeItem(TOKEN_KEY)))*/

    localStorage.removeItem(TOKEN_KEY)
    return of(undefined)
  }

  isLogged(): boolean {
    return localStorage.getItem(TOKEN_KEY) != null
  }
}
