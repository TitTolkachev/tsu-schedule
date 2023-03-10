import {Injectable} from '@angular/core';
import {IUserService} from "../i-user.service";
import {HttpClient} from "@angular/common/http";
import {Observable, throwError} from "rxjs";
import {Account} from "../../models/account";
import {SERVER_URL} from "../../constants";
import {Group} from "../../models/group";

@Injectable({
  providedIn: 'root'
})
export class UserService implements IUserService {

  constructor(
    private httpClient: HttpClient
  ) { }

  fetchAccounts(): Observable<Account[]> {
    return this.httpClient.get<Account[]>(
      `${SERVER_URL}/profile`
    )
  }

  // TODO
  createAccount(account: { firstName: string; lastName: string; patronymicName: string; role: string; group: Group | null; email: string; password: string }): Observable<void> {
    return throwError(() => Error("Not implemented"));
  }

  // TODO
  modifyAccount(id: string, account: { firstName: string; lastName: string; patronymicName: string; role: string | null; group: Group | null; email: string | null; password: string | null }): Observable<void> {
    return throwError(() => Error("Not implemented"));
  }

  // TODO
  deleteAccount(accountId: string): Observable<void> {
    return throwError(() => Error("Not implemented"));
  }
}
