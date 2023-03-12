import {Injectable} from '@angular/core';
import {ILessonService} from "../i-lesson.service";
import {Observable, of} from "rxjs";
import {LessonType} from "../../models/lesson-type";

@Injectable({
  providedIn: 'root'
})
export class LessonMockService implements ILessonService {

  constructor() { }

  createLesson(
    lessonCreateDto: {
      groupsIds: string[],
      studyRoomId: string,
      lessonTypeId: string,
      teacherId: string,
      subjectId: string,
      startDate: string,
      endDate: string,
      lessonNumber: number,
      frequency: number
    }
  ): Observable<void> {
    console.log(`CREATE LESSON`)
    console.log(lessonCreateDto)
    return of(undefined);
  }

  deleteLessonInGroup(lessonId: string): Observable<void> {
    console.log(`DELETE LESSON WITH ID ${lessonId}`)
    return of(undefined);
  }

  deleteLessonGroup(lessonId: string): Observable<void> {
    console.log(`DELETE LESSON GROUP WITH ID ${lessonId}`)
    return of(undefined);
  }

  fetchLessonTypes(): Observable<LessonType[]> {
    return of([
      new LessonType("1", "Лекция"),
      new LessonType("2", "Практика"),
      new LessonType("3", "Семинар"),
      new LessonType("4", "Экзамен")
    ]);
  }

  modifyLessonInGroup(lessonId: string, lessonEditDto: {
    groupsIds: string[],
    studyRoomId: string,
    teacherId: string,
    lessonTypeId: string,
    subjectId: string,
    date: string,
    lessonNumber: number
  }): Observable<void> {
    console.log(`MODIFY LESSON WITH ID ${lessonId}`)
    console.log(lessonEditDto)
    return of(undefined);
  }

  modifyLessonGroup(lessonId: string, lessonEditDto: {
    groupsIds: string[],
    studyRoomId: string,
    teacherId: string,
    lessonTypeId: string,
    subjectId: string,
    startDate: string,
    endDate: string,
    lessonNumber: number,
    frequency: number
  }): Observable<void> {
    console.log(`MODIFY LESSON GROUP WITH ID ${lessonId}`)
    console.log(lessonEditDto)
    return of(undefined);
  }
}
