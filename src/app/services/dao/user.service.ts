import {Injectable} from '@angular/core';
import {IUserService} from "../i-user.service";
import {HttpClient} from "@angular/common/http";
import {Observable, throwError} from "rxjs";
import {Account} from "../../models/account";
import {SERVER_URL} from "../../constants";

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

  createAccount(account: {
    firstName: string,
    lastName: string,
    patronymicName: string,
    role: string,
    groupId: string | null,
    teacherId: string | null,
    email: string,
    password: string
  }): Observable<void> {
    return this.httpClient.post<void>(
      `${SERVER_URL}/profile`,
      {
        firstName: account.firstName,
        lastName: account.lastName,
        patronymicName: account.patronymicName,
        role: account.role,
        groupId: account.groupId,
        teacherId: account.teacherId,
        email: account.email,
        password: account.password
      }
    )
  }

  // TODO Not implemented
  modifyAccount(id: string, account: {
    firstName: string,
    lastName: string,
    patronymicName: string,
    role: string,
    groupId: string | null,
    teacherId: string | null,
    email: string,
    password: string
  }): Observable<void> {
    return throwError(() => Error("Not implemented"));
  }

  // TODO Not implemented
  deleteAccount(accountId: string): Observable<void> {
    return throwError(() => Error("Not implemented"));
  }
}
