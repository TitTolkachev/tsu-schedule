import {LessonType} from "../models/lesson-type";
import {Lesson} from "../models/lesson";
import {Observable} from "rxjs";
import {LessonCreateDto} from "../models/lesson-create-dto";

export abstract class ILessonService {

  abstract createLesson(
    lessonCreateDto: LessonCreateDto
  ): Observable<void>

  abstract deleteLesson(
    lessonId: string
  ): Observable<void>

  abstract fetchLesson(
    lessonId: string
  ): Observable<Lesson>

  abstract fetchLessonTypes(): Observable<LessonType[]>

  abstract modifyLesson(
    lessonId: string,
    lessonCreateDto: LessonCreateDto
  ): Observable<void>

  abstract modifyLessonGroup(
    lessonGroupId: string,
    lessonCreateDto: LessonCreateDto
  ): Observable<void>

}
