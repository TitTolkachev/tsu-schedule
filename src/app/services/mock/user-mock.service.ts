import {Injectable} from '@angular/core';
import {IUserService} from "../i-user.service";
import {Teacher} from "../../models/teacher";
import {delay, Observable, of} from "rxjs";
import {Account} from "../../models/account";
import {Group} from "../../models/group";

@Injectable({
  providedIn: 'root'
})
export class UserMockService implements IUserService {

  private accounts: Account[] = [
    new Account("0", "Денис", "Змеев", "Олегович", "Teacher", null, null, "zmeeV@gmail.com"),
    new Account("1", "Диана", "Даммер", "Дамировна", "Teacher", null, null, "3d@gmail.com"),
    new Account("2", "Алексей", "Бабанов", "Михайлович", "Teacher", null, null, "bababa@gmail.com"),
    new Account("3", "Алексей", "Феофилов", "Дмитриевич", "Student", new Group("1", "972102"), null, "leha@gmail.com"),
    new Account("4", "Роман", "Аникушин", "Евгеньевич", "Student", new Group("1", "972101"), null, "romAN@vk.com"),
    new Account("5", "Иноземцева", "Иноземцева", "Андреевна", "Teacher", null, null, "inothe@gmail.com")
  ]
  private counter = this.accounts.length

  constructor() {}

  fetchAccounts(): Observable<Account[]> {
    return of(this.accounts.map(e => new Account(e.id, e.firstName, e.lastName, e.patronymicName, e.role, e.group, e.teacherId, e.email)))
      .pipe(delay(1000))
  }

  createAccount(account: {
    firstName: string,
    lastName: string,
    patronymicName: string,
    role: string,
    group: Group | null,
    email: string,
    password: string
  }): Observable<void> {
    this.accounts.push(new Account(
      (this.counter++).toString(),
      account.firstName,
      account.lastName,
      account.patronymicName,
      account.role,
      account.group,
      null,
      account.email
    ))
    return of(undefined).pipe(delay(1000))
  }

  modifyAccount(id: string, account: {
    firstName: string,
    lastName: string,
    patronymicName: string,
    role: string | null,
    group: Group | null,
    email: string | null,
    password: string | null
  }): Observable<void> {
    let index = this.accounts.findIndex(e => e.id == id)
    if (index > -1) {
      this.accounts[index] = new Account(
        this.accounts[index]!.id,
        account.firstName,
        account.lastName,
        account.patronymicName,
        account.role ? account.role : this.accounts[index]!.role,
        account.group ? account.group : this.accounts[index]!.group,
        null,
        account.email ? account.email : this.accounts[index]!.email
      )
    }
    return of(undefined).pipe(delay(1000))
  }

  deleteAccount(id: string): Observable<void> {
    let index = this.accounts.findIndex(e => e.id == id)
    if (index > -1) {
      this.accounts.splice(index, 1)
    }
    return of(undefined).pipe(delay(1000))
  }
}
