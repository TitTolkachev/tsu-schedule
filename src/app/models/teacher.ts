export class Teacher {

  readonly id: string
  readonly firstName: string
  readonly lastName: string
  readonly patronymicName: string

  constructor(id: string, firstName: string, lastName: string, patronymicName: string) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.patronymicName = patronymicName;
  }

  get fullName(): string {
    return this.lastName + " " + this.firstName + " " + this.patronymicName
  }
}
