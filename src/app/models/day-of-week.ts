export enum DayOfWeek {
  MONDAY = "MONDAY",
  TUESDAY = "TUESDAY",
  WEDNESDAY = "WEDNESDAY",
  THURSDAY = "THURSDAY",
  FRIDAY = "FRIDAY",
  SATURDAY = "SATURDAY",
  SUNDAY = "SUNDAY"
}

export function indexOf(dayOfWeek: DayOfWeek): number {
  switch (dayOfWeek) {
    case DayOfWeek.MONDAY:
      return 0
    case DayOfWeek.TUESDAY:
      return 1
    case DayOfWeek.WEDNESDAY:
      return 2
    case DayOfWeek.THURSDAY:
      return 3
    case DayOfWeek.FRIDAY:
      return 4
    case DayOfWeek.SATURDAY:
      return 5
    case DayOfWeek.SUNDAY:
      return 6
    default:
      throw new Error('Invalid day of week')
  }
}
