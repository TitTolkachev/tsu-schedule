export class Audience {

  readonly id: string
  readonly name: string
  readonly buildingNumber: number
  readonly floor: number
  readonly number: string

  constructor(id: string, name: string, buildingNumber: number, floor: number, number: string) {
    this.id = id;
    this.name = name;
    this.buildingNumber = buildingNumber;
    this.floor = floor;
    this.number = number;
  }
}
