import {Injectable} from '@angular/core';
import {ILessonService} from "../i-lesson.service";
import {HttpClient} from "@angular/common/http";
import {LessonCreateDto} from "../../models/lesson-create-dto";
import {Observable} from "rxjs";
import {Lesson} from "../../models/lesson";
import {LessonType} from "../../models/lesson-type";
import {SERVER_URL} from "../../constants";

@Injectable({
  providedIn: 'root'
})
export class LessonService implements ILessonService {

  constructor(
    private httpClient: HttpClient
  ) { }

  createLesson(lessonCreateDto: LessonCreateDto): Observable<void> {
    return this.httpClient.post<void>(
      `${SERVER_URL}/schedule/lesson`,
      {
        groupsIds: lessonCreateDto.groupsIds,
        studyRoomId: lessonCreateDto.studyRoomId,
        lessonTypeId: lessonCreateDto.lessonTypeId,
        teacherId: lessonCreateDto.teacherId,
        subjectId: lessonCreateDto.subjectId,
        startDate: lessonCreateDto.startDate,
        endDate: lessonCreateDto.endDate,
        dayOfWeek: lessonCreateDto.dayOfWeek,
        lessonNumber: lessonCreateDto.lessonNumber,
        frequency: lessonCreateDto.frequency
      }
    )
  }

  deleteLesson(lessonId: string): Observable<void> {
    return this.httpClient.delete<void>(
      `${SERVER_URL}/schedule/lesson/${lessonId}`
    )
  }

  fetchLesson(lessonId: string): Observable<Lesson> {
    return this.httpClient.get<Lesson>(
      `${SERVER_URL}/schedule/lesson/${lessonId}`
    )
  }

  fetchLessonTypes(): Observable<LessonType[]> {
    return this.httpClient.get<LessonType[]>(
      `${SERVER_URL}/schedule/lesson/type`
    )
  }

  modifyLesson(lessonId: string, lessonCreateDto: LessonCreateDto): Observable<void> {
    return this.httpClient.put<void>(
      `${SERVER_URL}/schedule/lesson`,
      {
        id: lessonId,
        groupsIds: lessonCreateDto.groupsIds,
        studyRoomId: lessonCreateDto.studyRoomId,
        lessonTypeId: lessonCreateDto.lessonTypeId,
        teacherId: lessonCreateDto.teacherId,
        subjectId: lessonCreateDto.subjectId,
        startDate: lessonCreateDto.startDate,
        endDate: lessonCreateDto.endDate,
        dayOfWeek: lessonCreateDto.dayOfWeek,
        lessonNumber: lessonCreateDto.lessonNumber,
        frequency: lessonCreateDto.frequency
      }
    )
  }

  modifyLessonGroup(lessonGroupId: string, lessonCreateDto: LessonCreateDto): Observable<void> {
    return this.httpClient.put<void>(
      `${SERVER_URL}/schedule/lesson-group`,
      {
        id: lessonGroupId,
        groupsIds: lessonCreateDto.groupsIds,
        studyRoomId: lessonCreateDto.studyRoomId,
        lessonTypeId: lessonCreateDto.lessonTypeId,
        teacherId: lessonCreateDto.teacherId,
        subjectId: lessonCreateDto.subjectId,
        startDate: lessonCreateDto.startDate,
        endDate: lessonCreateDto.endDate,
        dayOfWeek: lessonCreateDto.dayOfWeek,
        lessonNumber: lessonCreateDto.lessonNumber,
        frequency: lessonCreateDto.frequency
      }
    )
  }
}
