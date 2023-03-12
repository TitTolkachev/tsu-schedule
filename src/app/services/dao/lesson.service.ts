import {Injectable} from '@angular/core';
import {ILessonService} from "../i-lesson.service";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {LessonType} from "../../models/lesson-type";
import {SERVER_URL} from "../../constants";

@Injectable({
  providedIn: 'root'
})
export class LessonService implements ILessonService {

  constructor(
    private httpClient: HttpClient
  ) { }

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
    return this.httpClient.post<void>(
      `${SERVER_URL}/schedule/lesson`,
      {
        groupIds: lessonCreateDto.groupsIds,
        studyRoomId: lessonCreateDto.studyRoomId,
        lessonTypeId: lessonCreateDto.lessonTypeId,
        teacherId: lessonCreateDto.teacherId,
        subjectId: lessonCreateDto.subjectId,
        startDate: lessonCreateDto.startDate,
        endDate: lessonCreateDto.endDate,
        lessonNumber: lessonCreateDto.lessonNumber,
        frequency: lessonCreateDto.frequency
      }
    )
  }

  deleteLessonInGroup(lessonId: string): Observable<void> {
    return this.httpClient.delete<void>(
      `${SERVER_URL}/schedule/lesson/${lessonId}`
    )
  }

  deleteLessonGroup(lessonId: string): Observable<void> {
    return this.httpClient.delete<void>(
      `${SERVER_URL}/schedule/lesson/${lessonId}/lesson-group`
    )
  }

  fetchLessonTypes(): Observable<LessonType[]> {
    return this.httpClient.get<LessonType[]>(
      `${SERVER_URL}/schedule/lesson/type`
    )
  }

  modifyLessonInGroup(
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
  ): Observable<void> {
    return this.httpClient.put<void>(
      `${SERVER_URL}/schedule/lesson`,
      {
        id: lessonId,
        groupIds: lessonEditDto.groupsIds,
        studyRoomId: lessonEditDto.studyRoomId,
        lessonTypeId: lessonEditDto.lessonTypeId,
        teacherId: lessonEditDto.teacherId,
        subjectId: lessonEditDto.subjectId,
        startDate: lessonEditDto.date,
        lessonNumber: lessonEditDto.lessonNumber
      }
    )
  }

  modifyLessonGroup(
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
  ): Observable<void> {
    return this.httpClient.put<void>(
      `${SERVER_URL}/schedule/lesson/lesson-group`,
      {
        id: lessonId,
        groupIds: lessonEditDto.groupsIds,
        studyRoomId: lessonEditDto.studyRoomId,
        lessonTypeId: lessonEditDto.lessonTypeId,
        teacherId: lessonEditDto.teacherId,
        subjectId: lessonEditDto.subjectId,
        startDate: lessonEditDto.startDate,
        endDate: lessonEditDto.endDate,
        lessonNumber: lessonEditDto.lessonNumber,
        frequency: lessonEditDto.frequency
      }
    )
  }
}
