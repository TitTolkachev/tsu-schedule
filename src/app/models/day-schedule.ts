import {DayOfWeek} from "./day-of-week";
import {Lesson} from "./lesson";

export class DaySchedule {

  date: string
  dayOfWeek: DayOfWeek
  lessons: Lesson

  constructor(date: string, dayOfWeek: DayOfWeek, lessons: Lesson) {
    this.date = date;
    this.dayOfWeek = dayOfWeek;
    this.lessons = lessons;
  }
}
