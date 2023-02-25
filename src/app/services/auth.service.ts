import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, tap} from "rxjs";
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

  signOut(): Observable<any> {
    // TODO уточнить у бэка
    return this.httpClient.post(
      `${SERVER_URL}/authorisation/sign-out`,
      {}
    ).pipe(tap(() => localStorage.removeItem(TOKEN_KEY)))
  }

  isLogged(): boolean {
    return localStorage.getItem(TOKEN_KEY) != null
  }
}
