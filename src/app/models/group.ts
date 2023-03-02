export class Group {

  id: string
  number: string

  constructor(id: string, number: string) {
    this.id = id;
    this.number = number;
  }

  clone(): Group {
    return new Group(this.id, this.number)
  }

  static empty(): Group {
    return new Group("", "")
  }
}
