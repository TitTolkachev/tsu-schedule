import {Injectable} from '@angular/core';
import {IScheduleService} from "../i-schedule.service";
import {Observable, of} from "rxjs";
import {DaySchedule} from "../../models/day-schedule";
import {LessonTime} from "../../models/lesson-time";
import {DayOfWeek} from "../../models/day-of-week";
import {Lesson} from "../../models/lesson";
import {Audience} from "../../models/audience";
import {LessonType} from "../../models/lesson-type";
import {Teacher} from "../../models/teacher";
import {Subject} from "../../models/subject";
import {Time} from "../../models/time";

@Injectable({
  providedIn: 'root'
})
export class ScheduleMockService implements IScheduleService {

  constructor() { }

  fetchGroupSchedule(groupId: string, startDate: string, endDate: string): Observable<DaySchedule[]> {
    return of([
      new DaySchedule(
        "2023-03-08",
        DayOfWeek.MONDAY,
        [
          new Lesson(
            "1",
            [],
            new Audience("1", "Кабинет физики", 1, 1, "100"),
            new LessonType("1", "Пара"),
            new Teacher("1", "Иван", "Иванов", "Иванович"),
            new Subject("1", "Математика"),
            new LessonTime(1, new Time(0, 0, 0, 0), new Time(1, 0, 0, 0))
          )
        ]
      )
    ]);
  }

  fetchLessonTimes(): Observable<LessonTime[]> {
    return of([
      new LessonTime(
        1,
        new Time(0, 0, 0, 0),
        new Time(1, 0, 0 ,0)
      ),
      new LessonTime(
        2,
        new Time(1, 0, 0, 0),
        new Time(2, 0, 0 ,0)
      ),
      new LessonTime(
        3,
        new Time(2, 0, 0, 0),
        new Time(3, 0, 0 ,0)
      ),
      new LessonTime(
        4,
        new Time(3, 0, 0, 0),
        new Time(4, 0, 0 ,0)
      ),
    ]);
  }

  fetchSchedule(startDate: string, endDate: string): Observable<DaySchedule[]> {
    return of([
      new DaySchedule(
        "2023-03-08",
        DayOfWeek.MONDAY,
        [
          new Lesson(
            "1",
            [],
            new Audience("1", "Кабинет физики", 1, 1, "100"),
            new LessonType("1", "Пара"),
            new Teacher("1", "Иван", "Иванов", "Иванович"),
            new Subject("1", "Математика"),
            new LessonTime(1, new Time(0, 0, 0, 0), new Time(1, 0, 0, 0))
          )
        ]
      )
    ]);
  }

  fetchStaffSchedule(groupIds: string[], teacherId: string, audienceId: string, startDate: string, endDate: string): Observable<DaySchedule[]> {
    return of([
      new DaySchedule(
        "2023-03-08",
        DayOfWeek.MONDAY,
        [
          new Lesson(
            "1",
            [],
            new Audience("1", "Кабинет физики", 1, 1, "100"),
            new LessonType("1", "Пара"),
            new Teacher("1", "Иван", "Иванов", "Иванович"),
            new Subject("1", "Математика"),
            new LessonTime(1, new Time(0, 0, 0, 0), new Time(1, 0, 0, 0))
          )
        ]
      )
    ]);
  }

  fetchTeacherSchedule(teacherId: string, startDate: string, endDate: string): Observable<DaySchedule[]> {
    return of([
      new DaySchedule(
        "2023-03-08",
        DayOfWeek.MONDAY,
        [
          new Lesson(
            "1",
            [],
            new Audience("1", "Кабинет физики", 1, 1, "100"),
            new LessonType("1", "Пара"),
            new Teacher("1", "Иван", "Иванов", "Иванович"),
            new Subject("1", "Математика"),
            new LessonTime(1, new Time(0, 0, 0, 0), new Time(1, 0, 0, 0))
          )
        ]
      )
    ]);
  }
}
