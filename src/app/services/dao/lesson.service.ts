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

  createLesson(lessonCreateDto: LessonCreateDto): Observable<any> {
    return this.httpClient.post(
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

  deleteLesson(id: string): Observable<any> {
    return this.httpClient.delete(
      `${SERVER_URL}/schedule/lesson/${id}`
    )
  }

  fetchLesson(id: string): Observable<Lesson> {
    return this.httpClient.get<Lesson>(
      `${SERVER_URL}/schedule/lesson/${id}`
    )
  }

  fetchLessonTypes(): Observable<LessonType[]> {
    return this.httpClient.get<LessonType[]>(
      `${SERVER_URL}/schedule/lesson/type`
    )
  }

  modifyLesson(id: string, lessonCreateDto: LessonCreateDto): Observable<any> {
    return this.httpClient.put(
      `${SERVER_URL}/schedule/lesson`,
      {
        id: id,
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

  modifyLessonGroup(id: string, lessonCreateDto: LessonCreateDto): Observable<any> {
    return this.httpClient.put(
      `${SERVER_URL}/schedule/lesson-group`,
      {
        id: id,
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
