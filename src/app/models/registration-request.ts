import {Account} from "./account";

export class RegistrationRequest {

  readonly id: string
  readonly account: Account

  constructor(id: string, account: Account) {
    this.id = id;
    this.account = account;
  }
}

// TODO сделать полное копирование вглубину
export function cloneRegistrationRequest(registrationRequest: RegistrationRequest): RegistrationRequest {
  return new RegistrationRequest(
    registrationRequest.id,
    registrationRequest.account
  )
}
