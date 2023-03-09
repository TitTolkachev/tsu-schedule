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
import {Group} from "../../models/group";
import {addDays, format, parse} from "date-fns";

@Injectable({
  providedIn: 'root'
})
export class ScheduleMockService implements IScheduleService {

  private days: DaySchedule[] = [
    new DaySchedule(
      "2023-03-06",
      DayOfWeek.MONDAY,
      [
        new Lesson(
          "1",
          [
            new Group("1", "972101"),
            new Group("2", "972102"),
            new Group("3", "972103")
          ],
          new Audience("1", "Учебная аудитория", 3, 2, "301"),
          new LessonType("1", "Лекция"),
          new Teacher("1", "Иван", "Иванов", "Иванович"),
          new Subject("1", "Машинное обучение"),
          new LessonTime(1, new Time(8, 45, 0, 0), new Time(10, 20, 0, 0))
        ),
        new Lesson(
          "2",
          [
            new Group("1", "972101")
          ],
          new Audience("2", "Компьютерный класс", 2, 2, "233"),
          new LessonType("2", "Практика"),
          new Teacher("1", "Иван", "Иванов", "Иванович"),
          new Subject("2", "Программирование"),
          new LessonTime(2, new Time(10, 35, 0, 0), new Time(12, 10, 0, 0))
        ),
        new Lesson(
          "3",
          [
            new Group("2", "972102")
          ],
          new Audience("3", "Учебная аудитория", 2, 2, "214"),
          new LessonType("3", "Семинар"),
          new Teacher("2", "Иван", "Иванов", "Романович"),
          new Subject("3", "Иностранный язык"),
          new LessonTime(2, new Time(10, 35, 0, 0), new Time(12, 10, 0, 0))
        ),
        new Lesson(
          "4",
          [
            new Group("3", "972103")
          ],
          new Audience("3", "Учебная аудитория", 2, 2, "214"),
          new LessonType("3", "Семинар"),
          new Teacher("2", "Иван", "Иванов", "Романович"),
          new Subject("3", "Иностранный язык"),
          new LessonTime(3, new Time(12, 25, 0, 0), new Time(14, 0, 0, 0))
        )
      ]
    ),
    new DaySchedule(
      "2023-03-10",
      DayOfWeek.FRIDAY,
      [
        new Lesson(
          "5",
          [
            new Group("1", "972101")
          ],
          new Audience("3", "Учебная аудитория", 2, 2, "214"),
          new LessonType("3", "Семинар"),
          new Teacher("2", "Иван", "Иванов", "Романович"),
          new Subject("3", "Иностранный язык"),
          new LessonTime(3, new Time(12, 25, 0, 0), new Time(14, 0, 0, 0))
        )
      ]
    ),
    new DaySchedule(
      "2023-03-11",
      DayOfWeek.SATURDAY,
      [
        new Lesson(
          "6",
          [
            new Group("1", "972101")
          ],
          new Audience("2", "Компьютерный класс", 2, 2, "233"),
          new LessonType("2", "Практика"),
          new Teacher("1", "Иван", "Иванов", "Иванович"),
          new Subject("2", "Программирование"),
          new LessonTime(6, new Time(18, 25, 0, 0), new Time(20, 0, 0, 0))
        )
      ]
    )
  ]

  constructor() { }

  fetchGroupSchedule(groupId: string, startDate: string, endDate: string): Observable<DaySchedule[]> {
    return of(this.days);
  }

  fetchLessonTimes(): Observable<LessonTime[]> {
    return of([
      new LessonTime(
        1,
        new Time(8, 45, 0, 0),
        new Time(10, 20, 0 ,0)
      ),
      new LessonTime(
        2,
        new Time(10, 35, 0, 0),
        new Time(12, 10, 0 ,0)
      ),
      new LessonTime(
        3,
        new Time(12, 25, 0, 0),
        new Time(14, 0, 0 ,0)
      ),
      new LessonTime(
        4,
        new Time(14, 45, 0, 0),
        new Time(16, 20, 0 ,0)
      ),
      new LessonTime(
        5,
        new Time(16, 35, 0, 0),
        new Time(18, 10, 0 ,0)
      ),
      new LessonTime(
        6,
        new Time(18, 25, 0, 0),
        new Time(20, 0, 0 ,0)
      ),
    ]);
  }

  fetchSchedule(startDate: string, endDate: string): Observable<DaySchedule[]> {
    return of([
      new DaySchedule(
        startDate,
        DayOfWeek.MONDAY,
        [
          new Lesson(
            "1",
            [
              new Group("1", "972101"),
              new Group("2", "972102"),
              new Group("3", "972103")
            ],
            new Audience("1", "Учебная аудитория", 3, 2, "301"),
            new LessonType("1", "Лекция"),
            new Teacher("1", "Иван", "Иванов", "Иванович"),
            new Subject("1", "Машинное обучение"),
            new LessonTime(1, new Time(8, 45, 0, 0), new Time(10, 20, 0, 0))
          ),
          new Lesson(
            "2",
            [
              new Group("1", "972101")
            ],
            new Audience("2", "Компьютерный класс", 2, 2, "233"),
            new LessonType("2", "Практика"),
            new Teacher("1", "Иван", "Иванов", "Иванович"),
            new Subject("2", "Программирование"),
            new LessonTime(2, new Time(10, 35, 0, 0), new Time(12, 10, 0, 0))
          ),
          new Lesson(
            "3",
            [
              new Group("2", "972102")
            ],
            new Audience("3", "Учебная аудитория", 2, 2, "214"),
            new LessonType("3", "Семинар"),
            new Teacher("2", "Иван", "Иванов", "Романович"),
            new Subject("3", "Иностранный язык"),
            new LessonTime(2, new Time(10, 35, 0, 0), new Time(12, 10, 0, 0))
          ),
          new Lesson(
            "4",
            [
              new Group("3", "972103")
            ],
            new Audience("3", "Учебная аудитория", 2, 2, "214"),
            new LessonType("3", "Семинар"),
            new Teacher("2", "Иван", "Иванов", "Романович"),
            new Subject("3", "Иностранный язык"),
            new LessonTime(3, new Time(12, 25, 0, 0), new Time(14, 0, 0, 0))
          )
        ]
      ),
      new DaySchedule(
        format(addDays(parse(startDate, 'yyyy-MM-dd', new Date()), 4), 'yyyy-MM-dd'),
        DayOfWeek.FRIDAY,
        [
          new Lesson(
            "5",
            [
              new Group("1", "972101")
            ],
            new Audience("3", "Учебная аудитория", 2, 2, "214"),
            new LessonType("3", "Семинар"),
            new Teacher("2", "Иван", "Иванов", "Романович"),
            new Subject("3", "Иностранный язык"),
            new LessonTime(3, new Time(12, 25, 0, 0), new Time(14, 0, 0, 0))
          )
        ]
      ),
      new DaySchedule(
        format(addDays(parse(startDate, 'yyyy-MM-dd', new Date()), 5), 'yyyy-MM-dd'),
        DayOfWeek.SATURDAY,
        [
          new Lesson(
            "6",
            [
              new Group("1", "972101")
            ],
            new Audience("2", "Компьютерный класс", 2, 2, "233"),
            new LessonType("2", "Практика"),
            new Teacher("1", "Иван", "Иванов", "Иванович"),
            new Subject("2", "Программирование"),
            new LessonTime(6, new Time(18, 25, 0, 0), new Time(20, 0, 0, 0))
          )
        ]
      )
    ]);
  }

  fetchStaffSchedule(groupIds: string[], teacherId: string, audienceId: string, startDate: string, endDate: string): Observable<DaySchedule[]> {
    return of(this.days);
  }

  fetchTeacherSchedule(teacherId: string, startDate: string, endDate: string): Observable<DaySchedule[]> {
    return of(this.days);
  }
}
