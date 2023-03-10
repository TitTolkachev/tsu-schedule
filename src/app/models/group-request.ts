import {Account} from "./account";
import {Group} from "./group";

export class GroupRequest {

  readonly id: string
  readonly account: Account
  readonly group: Group

  constructor(id: string, account: Account, group: Group) {
    this.id = id;
    this.account = account;
    this.group = group
  }
}
