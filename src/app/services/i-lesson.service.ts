import {LessonType} from "../models/lesson-type";
import {Observable} from "rxjs";

export abstract class ILessonService {

  abstract createLesson(
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
  ): Observable<void>

  abstract deleteLessonInGroup(
    lessonId: string
  ): Observable<void>

  abstract deleteLessonGroup(
    lessonId: string
  ): Observable<void>

  abstract fetchLessonTypes(): Observable<LessonType[]>

  abstract modifyLessonInGroup(
    lessonId: string,
    lessonEditDto: {
      groupsIds: string[], // TODO может не работать на бёке
      studyRoomId: string,
      teacherId: string,
      lessonTypeId: string, // TODO может не работать на бёке
      subjectId: string, // TODO может не работать на бёке
      date: string,
      lessonNumber: number
    }
  ): Observable<void>

  abstract modifyLessonGroup(
    lessonId: string,
    lessonEditDto: {
      groupsIds: string[],
      studyRoomId: string,
      teacherId: string,
      lessonTypeId: string,
      subjectId: string,
      startDate: string,
      endDate: string,
      lessonNumber: number,
      frequency: number
    }
  ): Observable<void>

}
