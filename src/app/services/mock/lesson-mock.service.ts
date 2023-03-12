import {Injectable} from '@angular/core';
import {ILessonService} from "../i-lesson.service";
import {LessonCreateDto} from "../../models/lesson-create-dto";
import {Observable, of} from "rxjs";
import {Lesson} from "../../models/lesson";
import {LessonType} from "../../models/lesson-type";
import {Audience} from "../../models/audience";
import {Teacher} from "../../models/teacher";
import {Subject} from "../../models/subject";
import {LessonTime} from "../../models/lesson-time";
import {Time} from "../../models/time";

@Injectable({
  providedIn: 'root'
})
export class LessonMockService implements ILessonService {

  constructor() { }

  createLesson(lessonCreateDto: LessonCreateDto): Observable<void> {
    console.log(`CREATE LESSON`)
    console.log(lessonCreateDto)
    return of(undefined);
  }

  deleteLesson(id: string): Observable<void> {
    console.log(`DELETE LESSON WITH ID ${id}`)
    return of(undefined);
  }

  fetchLesson(id: string): Observable<Lesson> {
    return of(new Lesson(
      "1",
      [],
      new Audience("1", "Кабинет физики", 1, 1, "100"),
      new LessonType("1", "Пара"),
      new Teacher("1", "Иван", "Иванов", "Иванович"),
      new Subject("1", "Математика"),
      new LessonTime(1, new Time(0, 0, 0, 0), new Time(1, 0, 0, 0))
    ));
  }

  fetchLessonTypes(): Observable<LessonType[]> {
    return of([
      new LessonType("1", "Лекция"),
      new LessonType("2", "Практика"),
      new LessonType("3", "Семинар"),
      new LessonType("4", "Экзамен")
    ]);
  }

  modifyLesson(id: string, lessonCreateDto: LessonCreateDto): Observable<void> {
    console.log(`MODIFY LESSON WITH ID ${id}`)
    console.log(lessonCreateDto)
    return of(undefined);
  }

  modifyLessonGroup(id: string, lessonCreateDto: LessonCreateDto): Observable<void> {
    console.log(`MODIFY LESSON GROUP WITH ID ${id}`)
    console.log(lessonCreateDto)
    return of(undefined);
  }
}
