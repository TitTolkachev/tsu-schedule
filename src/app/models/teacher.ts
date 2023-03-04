export class Teacher {

  id: string
  firstName: string
  lastName: string
  patronymicName: string

  constructor(id: string, firstName: string, lastName: string, patronymicName: string) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.patronymicName = patronymicName;
  }

  get fullName(): string {
    return this.lastName + " " + this.firstName + " " + this.patronymicName
  }

  clone(): Teacher {
    return new Teacher(this.id, this.firstName, this.lastName, this.patronymicName)
  }

  static empty(): Teacher {
    return new Teacher("", "", "", "")
  }
}
