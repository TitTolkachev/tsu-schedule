export class Subject {

  id: string
  name: string

  constructor(id: string, name: string) {
    this.id = id;
    this.name = name;
  }

  clone(): Subject {
    return new Subject(this.id, this.name)
  }
}
