export class Pair {
  constructor(name: string, placement: string, groups: string, type?: string, teacher?: string, date?: string, time?: string) {
    this.Name = name
    this.Placement = placement
    this.Groups = groups
    this.Type = type
    this.Teacher = teacher
    this.Date = date
    this.Time = time
  }

  Name = ''

  Placement = ''

  Groups = ''

  Type: string | undefined = ''

  Teacher: string | undefined = ''

  Date: string | undefined = ''

  Time: string | undefined = ''
}
