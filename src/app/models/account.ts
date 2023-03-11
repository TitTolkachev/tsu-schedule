import {Group} from "./group";

export class Account {

  readonly id: string
  readonly firstName: string
  readonly lastName: string
  readonly patronymicName: string
  readonly role: string
  readonly group: Group | null
  readonly teacherId: string | null
  readonly email: string

  constructor(id: string, firstName: string, lastName: string, patronymicName: string, role: string, group: Group | null, teacherId: string | null, email: string) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.patronymicName = patronymicName;
    this.role = role;
    this.group = group;
    this.teacherId = teacherId;
    this.email = email;
  }
}
