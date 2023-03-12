import {LessonType} from "../models/lesson-type";
import {Lesson} from "../models/lesson";
import {Observable} from "rxjs";
import {LessonCreateDto} from "../models/lesson-create-dto";

export abstract class ILessonService {

  abstract createLesson(
    lessonCreateDto: LessonCreateDto
  ): Observable<any>

  abstract deleteLesson(
    id: string
  ): Observable<any>

  abstract fetchLesson(
    id: string
  ): Observable<Lesson>

  abstract fetchLessonTypes(): Observable<LessonType[]>

  abstract modifyLesson(
    id: string,
    lessonCreateDto: LessonCreateDto
  ): Observable<any>

  abstract modifyLessonGroup(
    id: string,
    lessonCreateDto: LessonCreateDto
  ): Observable<any>

}
