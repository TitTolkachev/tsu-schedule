export class Pair {
  constructor(id: string, name: string, placement: string, groups: string, type?: string, teacher?: string, date?: string, time?: string, isActive?: boolean) {
    this.Id = id
    this.Name = name
    this.Placement = placement
    this.Groups = groups
    this.Type = type
    this.Teacher = teacher
    this.Date = date
    this.Time = time
    this.IsActive = isActive
  }

  readonly Id: string

  Name = ''
  Placement = ''
  Groups = ''
  Type: string | undefined = ''
  Teacher: string | undefined = ''
  Date: string | undefined = ''
  Time: string | undefined = ''
  IsActive: boolean | undefined = false

  /**
   * От 0 до 5
   */
  DayOfWeek: number | undefined
  Repeat: number | undefined
  GroupDateStart: Date | undefined
  GroupDateEnd: Date | undefined
}
