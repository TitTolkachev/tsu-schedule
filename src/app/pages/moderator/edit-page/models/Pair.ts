export class Pair {

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
  GroupId: string | undefined

  constructor(Id: string, Name: string, Placement: string, Groups: string, Type: string | undefined, Teacher: string | undefined, Date: string | undefined, Time: string | undefined, IsActive: boolean | undefined, DayOfWeek: number | undefined, Repeat: number | undefined, GroupDateStart: Date | undefined, GroupDateEnd: Date | undefined, GroupId: string | undefined) {
    this.Id = Id;
    this.Name = Name;
    this.Placement = Placement;
    this.Groups = Groups;
    this.Type = Type;
    this.Teacher = Teacher;
    this.Date = Date;
    this.Time = Time;
    this.IsActive = IsActive;
    this.DayOfWeek = DayOfWeek;
    this.Repeat = Repeat;
    this.GroupDateStart = GroupDateStart;
    this.GroupDateEnd = GroupDateEnd;
    this.GroupId = GroupId;
  }

  static empty() {
    return new Pair('', '', '', '', '', '', '', '', undefined, 0, 0, new Date, new Date, '')
  }
}
