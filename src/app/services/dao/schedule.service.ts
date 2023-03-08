import {Injectable} from '@angular/core';
import {IScheduleService} from "../i-schedule.service";
import {HttpClient} from "@angular/common/http";
import {SERVER_URL} from "../../constants";
import {DaySchedule} from "../../models/day-schedule";
import {Observable} from "rxjs";
import {LessonTime} from "../../models/lesson-time";

@Injectable({
  providedIn: 'root'
})
export class ScheduleService implements IScheduleService {

  constructor(
    private httpClient: HttpClient
  ) { }

  fetchGroupSchedule(groupId: string, startDate: string, endDate: string): Observable<DaySchedule[]> {
    return this.httpClient.get<DaySchedule[]>(
      `${SERVER_URL}/schedule/group/${groupId}?startDate=${startDate}&endDate=${endDate}`
    )
  }

  fetchLessonTimes(): Observable<LessonTime[]> {
    return this.httpClient.get<LessonTime[]>(
      `${SERVER_URL}/schedule/lesson-time`
    )
  }

  fetchSchedule(startDate: string, endDate: string): Observable<DaySchedule[]> {
    return this.httpClient.get<DaySchedule[]>(
      `${SERVER_URL}/schedule?startDate=${startDate}&endDate=${endDate}`
    )
  }

  fetchStaffSchedule(groupIds: string[], teacherId: string, audienceId: string, startDate: string, endDate: string): Observable<DaySchedule[]> {
    return this.httpClient.get<DaySchedule[]>(
      `${SERVER_URL}/schedule/staff?teacherId=${teacherId}&studyRoomId=${audienceId}&startDate=${startDate}&endDate=${endDate}&groupIds=${groupIds.join(',')}`
    )
  }

  fetchTeacherSchedule(teacherId: string, startDate: string, endDate: string): Observable<DaySchedule[]> {
    return this.httpClient.get<DaySchedule[]>(
      `${SERVER_URL}/schedule/teacher/${teacherId}?startDate=${startDate}&endDate=${endDate}`
    )
  }
}
