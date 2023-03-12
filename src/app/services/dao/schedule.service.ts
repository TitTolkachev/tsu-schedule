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

  fetchLessonTimes(): Observable<LessonTime[]> {
    return this.httpClient.get<LessonTime[]>(
      `${SERVER_URL}/schedule/lesson-time`
    )
  }

  fetchStaffSchedule(groupIds: string[], teacherId: string | null, audienceId: string | null, startDate: string, endDate: string): Observable<DaySchedule[]> {
    let queries = `startDate=${startDate}&endDate=${endDate}`
    if (teacherId != null) {
      queries = `${queries}&teacherId=${teacherId}`
    }
    if (audienceId != null) {
      queries = `${queries}&studyRoomId=${audienceId}`
    }
    groupIds.forEach(id => queries = `${queries}&groupIds=${id}`)
    return this.httpClient.get<DaySchedule[]>(
      `${SERVER_URL}/schedule/staff?${queries}`
    )
  }
}
