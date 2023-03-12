import {DayOfWeek} from "./day-of-week";
import {Lesson} from "./lesson";

export class DaySchedule {

  readonly date: string
  readonly dayOfWeek: DayOfWeek
  readonly lessons: Lesson[]

  constructor(date: string, dayOfWeek: DayOfWeek, lessons: Lesson[]) {
    this.date = date;
    this.dayOfWeek = dayOfWeek;
    this.lessons = lessons;
  }
}
