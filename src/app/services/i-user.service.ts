import {Observable} from "rxjs";
import {Account} from "../models/account";
import {Group} from "../models/group";

export abstract class IUserService {

  abstract fetchAccounts(): Observable<Account[]>

  abstract createAccount(account: {
    firstName: string,
    lastName: string,
    patronymicName: string,
    role: string,
    group: Group | null,
    email: string,
    password: string
  }): Observable<void>

  abstract modifyAccount(id: string, account: {
    firstName: string,
    lastName: string,
    patronymicName: string,
    role: string | null,
    group: Group | null,
    email: string | null,
    password: string | null
  }): Observable<void>

  abstract deleteAccount(accountId: string): Observable<void>

}
