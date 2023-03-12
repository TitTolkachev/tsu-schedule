import {Observable} from "rxjs";
import {Account} from "../models/account";

export abstract class IUserService {

  abstract fetchAccounts(): Observable<Account[]>

  abstract createAccount(account: {
    firstName: string,
    lastName: string,
    patronymicName: string,
    role: string,
    groupId: string | null,
    teacherId: string | null,
    email: string,
    password: string
  }): Observable<void>

  /**
   * @deprecated устарело по причине того,
   * что бекенд не реализовал возможность редактировать аккаунт
   * TODO возможно убрать
   */
  abstract modifyAccount(id: string, account: {
    firstName: string,
    lastName: string,
    patronymicName: string,
    role: string | null,
    groupId: string | null,
    teacherId: string | null,
    email: string | null,
    password: string | null
  }): Observable<void>

  abstract deleteAccount(accountId: string): Observable<void>

}
