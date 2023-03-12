export enum DayOfWeek {
  MONDAY = "MONDAY",
  TUESDAY = "TUESDAY",
  WEDNESDAY = "WEDNESDAY",
  THURSDAY = "THURSDAY",
  FRIDAY = "FRIDAY",
  SATURDAY = "SATURDAY",
  SUNDAY = "SUNDAY"
}

export class DayOfWeeks {

  private static _values = [
    DayOfWeek.MONDAY,
    DayOfWeek.TUESDAY,
    DayOfWeek.WEDNESDAY,
    DayOfWeek.THURSDAY,
    DayOfWeek.FRIDAY,
    DayOfWeek.SATURDAY,
    DayOfWeek.SUNDAY
  ]

  static indexOf(dayOfWeek: DayOfWeek): number {
    return DayOfWeeks.values.findIndex(e => e == dayOfWeek)
  }

  static get values(): DayOfWeek[] {
    return DayOfWeeks._values
  }
}
