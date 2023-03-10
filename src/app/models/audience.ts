export class Audience {

  readonly id: string
  readonly name: string
  readonly frame: number
  readonly floor: number
  readonly number: string

  constructor(id: string, name: string, frame: number, floor: number, number: string) {
    this.id = id;
    this.name = name;
    this.frame = frame;
    this.floor = floor;
    this.number = number;
  }
}
