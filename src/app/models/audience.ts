export class Audience {

  id: string
  name: string
  frame: string
  floor: number
  number: string

  constructor(id: string, name: string, frame: string, floor: number, number: string) {
    this.id = id;
    this.name = name;
    this.frame = frame;
    this.floor = floor;
    this.number = number;
  }

  clone(): Audience {
    return new Audience(this.id, this.name, this.frame, this.floor, this.number)
  }

  static empty(): Audience {
    return new Audience("", "", "", 1, "")
  }
}
