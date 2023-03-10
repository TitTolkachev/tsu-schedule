import {Account} from "./account";

export class RegistrationRequest {

  readonly id: string
  readonly account: Account

  constructor(id: string, account: Account) {
    this.id = id;
    this.account = account;
  }
}
